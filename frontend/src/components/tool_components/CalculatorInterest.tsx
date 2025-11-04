import React, {type JSX, useState} from "react";

export default function CalculatorInterest(): JSX.Element {
    const [principal, setPrincipal] = useState<string>("0");
    const [rate, setRate] = useState<string>("5"); // percent per year
    const [time, setTime] = useState<string>("1"); // years
    const [timeUnit, setTimeUnit] = useState<"years" | "months">("years");

    const parse = (s: string) => {
        const n = parseFloat(s.replace(/,/g, ""));
        return Number.isFinite(n) ? n : 0;
    };

    const p = parse(principal);
    const r = parse(rate) / 100;
    const t = timeUnit === "years" ? parse(time) : parse(time) / 12;

    const interest = p * r * t;
    const total = p + interest;

    const input = (
        value: string,
        onChange: (v: string) => void,
        props?: React.InputHTMLAttributes<HTMLInputElement>
    ) => (
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            inputMode="decimal"
            style={{
                width: "100%",
                padding: 8,
                fontSize: 16,
                borderRadius: 6,
                border: "1px solid #ccc",
                boxSizing: "border-box",
            }}
            {...props}
        />
    );

    return (
        <div
            role="application"
            aria-label="Simple interest calculator"
            style={{
                maxWidth: 360,
                padding: 12,
                borderRadius: 10,
                background: "#fff",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                fontFamily: "Inter, Roboto, Arial, sans-serif",
            }}
        >
            <div style={{marginBottom: 10, fontSize: 18, fontWeight: 600}}>
                Simple Interest
            </div>

            <label style={{fontSize: 13, marginBottom: 6}}>Principal</label>
            {input(principal, setPrincipal, {placeholder: "0.00"})}

            <div style={{display: "flex", gap: 8, marginTop: 8}}>
                <div style={{flex: 1}}>
                    <label style={{fontSize: 13}}>Rate (% / year)</label>
                    {input(rate, setRate, {placeholder: "5"})}
                </div>
                <div style={{width: 110}}>
                    <label style={{fontSize: 13}}>Time</label>
                    <div style={{display: "flex", gap: 6}}>
                        <div style={{flex: 1}}>{input(time, setTime, {placeholder: "1"})}</div>
                        <select
                            value={timeUnit}
                            onChange={(e) => setTimeUnit(e.target.value as any)}
                            style={{
                                padding: 8,
                                borderRadius: 6,
                                border: "1px solid #ccc",
                                background: "#fff",
                            }}
                            aria-label="Time unit"
                        >
                            <option value="years">yrs</option>
                            <option value="months">mo</option>
                        </select>
                    </div>
                </div>
            </div>

            <div
                style={{
                    marginTop: 12,
                    padding: 12,
                    borderRadius: 8,
                    background: "#f7f7f8",
                    fontSize: 15,
                }}
                aria-live="polite"
            >
                <div style={{display: "flex", justifyContent: "space-between", marginBottom: 6}}>
                    <span>Interest</span>
                    <strong>${interest.toLocaleString(undefined, {maximumFractionDigits: 2})}</strong>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <span>Total (Principal + Interest)</span>
                    <strong>${total.toLocaleString(undefined, {maximumFractionDigits: 2})}</strong>
                </div>
            </div>
        </div>
    );
}