import React, {type JSX, useState} from "react";

type Operator = "+" | "-" | "×" | "÷" | null;

function CalculatorSimple(): JSX.Element {
    // Local component state only
    const [display, setDisplay] = useState<string>("0");
    const [prevValue, setPrevValue] = useState<number | null>(null);
    const [operator, setOperator] = useState<Operator>(null);
    const [waitingForNewValue, setWaitingForNewValue] = useState<boolean>(false);

    const inputDigit = (digit: string) => {
        if (waitingForNewValue) {
            setDisplay(digit === "." ? "0." : digit);
            setWaitingForNewValue(false);
        } else {
            if (display === "0" && digit !== ".") {
                setDisplay(digit);
            } else if (digit === "." && display.includes(".")) {
                // ignore second decimal
                return;
            } else {
                setDisplay(display + digit);
            }
        }
    };

    const clearAll = () => {
        setDisplay("0");
        setPrevValue(null);
        setOperator(null);
        setWaitingForNewValue(false);
    };

    const toggleSign = () => {
        if (display === "0") return;
        setDisplay((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
    };

    const percent = () => {
        const value = parseFloat(display);
        if (isNaN(value)) return;
        setDisplay(String(value / 100));
        if (waitingForNewValue) {
            setWaitingForNewValue(false);
        }
    };

    const performCalculation = (nextOperator: Operator | null) => {
        const inputValue = parseFloat(display);

        if (prevValue == null) {
            // first operand
            setPrevValue(inputValue);
        } else if (operator) {
            let current = prevValue;
            switch (operator) {
                case "+":
                    current = prevValue + inputValue;
                    break;
                case "-":
                    current = prevValue - inputValue;
                    break;
                case "×":
                    current = prevValue * inputValue;
                    break;
                case "÷":
                    // handle divide by zero
                    current =
                        inputValue === 0 ? Number.POSITIVE_INFINITY : prevValue / inputValue;
                    break;
            }
            // Avoid long floats: limit to 12 significant digits
            const rounded =
                Math.abs(current) < 1e12 ? parseFloat(current.toPrecision(12)) : current;
            setPrevValue(rounded);
            setDisplay(String(rounded));
        }

        setWaitingForNewValue(true);
        setOperator(nextOperator);
    };

    const handleOperator = (nextOp: Operator) => {
        // If user presses new operator while waiting, just switch operator
        if (waitingForNewValue && prevValue != null) {
            setOperator(nextOp);
            return;
        }
        performCalculation(nextOp);
    };

    const handleEquals = () => {
        performCalculation(null);
        setOperator(null);
        setPrevValue(null);
        setWaitingForNewValue(true);
    };

    // Basic accessible button renderer
    const Button: React.FC<{
        onClick: () => void;
        label: string;
        className?: string;
        ariaLabel?: string;
    }> = ({onClick, label, className, ariaLabel}) => (
        <button
            type="button"
            onClick={onClick}
            className={className}
            aria-label={ariaLabel ?? label}
            style={{
                flex: label === "0" ? 2 : 1,
                padding: "18px",
                margin: "6px",
                fontSize: "1.25rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                background: "#f7f7f7",
                cursor: "pointer",
            }}
        >
            {label}
        </button>
    );

    return (
        <div
            role="application"
            aria-label="Simple calculator"
            style={{
                width: 320,
                margin: "12px",
                padding: 12,
                borderRadius: 12,
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                background: "#ffffff",
                fontFamily: "Inter, Roboto, Arial, sans-serif",
            }}
        >
            <div
                style={{
                    background: "#222",
                    color: "#fff",
                    borderRadius: 8,
                    padding: "18px 12px",
                    textAlign: "right",
                    fontSize: "2rem",
                    minHeight: 64,
                    overflow: "hidden",
                    wordBreak: "break-all",
                }}
                aria-live="polite"
            >
                {display}
            </div>

            <div style={{display: "flex", flexWrap: "wrap", marginTop: 12}}>
                <Button
                    onClick={clearAll}
                    label="AC"
                    ariaLabel="All clear"
                    className="btn-ac"
                />
                <Button onClick={toggleSign} label="+/-" ariaLabel="Toggle sign"/>
                <Button onClick={percent} label="%" ariaLabel="Percent"/>
                <Button
                    onClick={() => handleOperator("÷")}
                    label="÷"
                    className="btn-operator"
                />

                <Button onClick={() => inputDigit("7")} label="7"/>
                <Button onClick={() => inputDigit("8")} label="8"/>
                <Button onClick={() => inputDigit("9")} label="9"/>
                <Button
                    onClick={() => handleOperator("×")}
                    label="×"
                    className="btn-operator"
                />

                <Button onClick={() => inputDigit("4")} label="4"/>
                <Button onClick={() => inputDigit("5")} label="5"/>
                <Button onClick={() => inputDigit("6")} label="6"/>
                <Button
                    onClick={() => handleOperator("-")}
                    label="-"
                    className="btn-operator"
                />

                <Button onClick={() => inputDigit("1")} label="1"/>
                <Button onClick={() => inputDigit("2")} label="2"/>
                <Button onClick={() => inputDigit("3")} label="3"/>
                <Button
                    onClick={() => handleOperator("+")}
                    label="+"
                    className="btn-operator"
                />

                <Button onClick={() => inputDigit("0")} label="0"/>
                <Button onClick={() => inputDigit(".")} label="."/>
                <Button
                    onClick={handleEquals}
                    label="="
                    className="btn-equals"
                    ariaLabel="Equals"
                />
            </div>
        </div>
    );
}

export default CalculatorSimple;