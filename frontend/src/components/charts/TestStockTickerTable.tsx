import React, {type JSX, useEffect, useState} from "react";

/**
 * TestStockTickerTable
 *
 * - Functional component (no class).
 * - Self-contained: no props or external state — only local useState/useEffect.
 * - Fetches live quotes from FinancialModelingPrep demo API for a visual POC.
 * - Export default is at the bottom of the file only.
 *
 * Note: demo API key is for examples and may be rate-limited. Replace with your key for production.
 */

type Quote = {
    symbol: string;
    price: number;
    volume?: number;
};

function TestStockTickerTable(): JSX.Element {
    const symbols = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"];
    const [quotes, setQuotes] = useState<Quote[]>(
        symbols.map((s) => ({symbol: s, price: 0, volume: 0}))
    );
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<string>("");

    useEffect(() => {
        const apiKey = "demo";
        const url = `https://financialmodelingprep.com/api/v3/quote-short/${symbols.join(
            ","
        )}?apikey=${apiKey}`;

        let cancelled = false;
        setLoading(true);
        setError(null);

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((data: Array<{ symbol: string; price: number; volume?: number }>) => {
                if (cancelled) return;
                const map = new Map<string, Quote>();
                data.forEach((d) =>
                    map.set(d.symbol, {symbol: d.symbol, price: d.price, volume: d.volume})
                );
                const ordered = symbols.map((s) => map.get(s) ?? {symbol: s, price: 0, volume: 0});
                setQuotes(ordered);
                setLastUpdated(new Date().toLocaleTimeString());
                setLoading(false);
            })
            .catch((err) => {
                if (cancelled) return;
                setError(
                    err?.message ??
                    "Failed to fetch live quotes — may be network, CORS, or rate-limited demo API."
                );
                setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, []); // run once on mount

    return (
        <div
            role="region"
            aria-label="Stock ticker table"
            style={{
                maxWidth: 720,
                // margin: "12px auto",
                padding: 12,
                borderRadius: 10,
                background: "#ffffff",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                fontFamily: "Inter, Roboto, Arial, sans-serif",
            }}
        >
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8}}>
                <h3 style={{margin: 0}}>Live stock quotes (POC)</h3>
                <small style={{color: "#666"}}>{loading ? "Loading…" : `Updated ${lastUpdated}`}</small>
            </div>

            <table style={{width: "100%", borderCollapse: "collapse"}}>
                <thead>
                <tr>
                    <th style={thStyle}>Symbol</th>
                    <th style={thStyle}>Price (USD)</th>
                    <th style={thStyle}>Volume</th>
                </tr>
                </thead>
                <tbody>
                {quotes.map((q) => (
                    <tr key={q.symbol} style={{borderTop: "1px solid #eee"}}>
                        <td style={tdStyle}>{q.symbol}</td>
                        <td style={tdStyle}>{q.price ? q.price.toFixed(2) : "—"}</td>
                        <td style={tdStyle}>{q.volume && q.volume > 0 ? q.volume.toLocaleString() : "—"}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div style={{marginTop: 10, color: error ? "#b00020" : "#666", fontSize: 13}}>
                {error ? (
                    <div>
                        <strong>Live data unavailable:</strong> {error}
                        <div style={{marginTop: 6}}>
                            Issue fetching data
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

/* small inline styles */
const thStyle: React.CSSProperties = {
    textAlign: "left",
    padding: "8px 6px",
    fontSize: 13,
    color: "#333",
    borderBottom: "2px solid #f0f0f0",
};
const tdStyle: React.CSSProperties = {
    padding: "10px 6px",
    fontSize: 14,
    color: "#111",
};

export default TestStockTickerTable;