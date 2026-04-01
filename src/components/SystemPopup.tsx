import { useEffect } from "react";
import { Button } from "./Button";

interface TableRow {
    label: string;
    value: string;
}

interface SystemPopupProps {
    question: string;
    items?: string[];
    tableRows?: TableRow[];
    yesLabel?: string;
    noLabel?: string;
    onYes: () => void;
    onNo: () => void;
}

export function SystemPopup({
    question,
    items,
    tableRows,
    yesLabel = "Yes",
    noLabel = "No",
    onYes,
    onNo,
}: SystemPopupProps) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onNo();
            if (e.key === "Enter") onYes();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onYes, onNo]);

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
        >
            <div
                style={{
                    width: 360,
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #999",
                    borderRadius: 8,
                    boxShadow:
                        "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.08)",
                    fontFamily:
                        '-apple-system, "Segoe UI", system-ui, BlinkMacSystemFont, sans-serif',
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "10px 14px",
                        borderBottom: "1px solid #d1d1d1",
                        background:
                            "linear-gradient(to bottom, #fafafa, #e8e8e8)",
                    }}
                >
                    <div
                        style={{
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            background:
                                "linear-gradient(to bottom, #ff6058, #e0443e)",
                            border: "1px solid #d94039",
                        }}
                    />
                    <div
                        style={{
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            background:
                                "linear-gradient(to bottom, #ffbd2e, #dea123)",
                            border: "1px solid #cfa01e",
                        }}
                    />
                    <div
                        style={{
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            background:
                                "linear-gradient(to bottom, #27c93f, #1aab29)",
                            border: "1px solid #14982a",
                        }}
                    />
                    <span
                        style={{
                            flex: 1,
                            textAlign: "center",
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#4a4a4a",
                            marginRight: 46,
                        }}
                    ></span>
                </div>

                <div style={{ padding: "20px 24px 16px" }}>
                    <div
                        style={{
                            display: "flex",
                            gap: 14,
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 8,
                                backgroundColor: "rgb(67 110 119)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <span
                                style={{
                                    color: "#fff",
                                    fontSize: 22,
                                    fontWeight: 700,
                                }}
                            >
                                ?
                            </span>
                        </div>
                        <p
                            style={{
                                margin: 0,
                                fontSize: 13,
                                lineHeight: 1.5,
                                color: "#1a1a1a",
                            }}
                        >
                            {question}
                        </p>
                    </div>

                    {tableRows && tableRows.length > 0 && (
                        <table
                            style={{
                                marginTop: 14,
                                width: "100%",
                                borderCollapse: "separate",
                                borderSpacing: 0,
                                backgroundColor: "rgb(67 110 119)",
                                border: "1px solid rgb(67 110 119)",
                                borderRadius: 6,
                                overflow: "hidden",
                                fontSize: 12,
                            }}
                        >
                            <tbody>
                                {tableRows.map((row, i) => (
                                    <tr
                                        key={i}
                                        style={{
                                            borderBottom: "none",
                                        }}
                                    >
                                        <td
                                            style={{
                                                padding: "7px 12px",
                                                color: "#fff",
                                                fontWeight: 500,
                                                whiteSpace: "nowrap",
                                                backgroundColor:
                                                    "rgb(67 110 119)",
                                                borderBottom:
                                                    i < tableRows.length - 1
                                                        ? "1px solid rgba(255,255,255,0.3)"
                                                        : "none",
                                            }}
                                        >
                                            {row.label}
                                        </td>
                                        <td
                                            style={{
                                                padding: "7px 12px",
                                                color: "#1a1a1a",
                                                fontWeight: 600,
                                                backgroundColor: "#fff",
                                                borderBottom:
                                                    i < tableRows.length - 1
                                                        ? "1px solid rgb(67 110 119)"
                                                        : "none",
                                                maxWidth: 200,
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {row.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {items && items.length > 0 && (
                        <div
                            style={{
                                marginTop: 14,
                                padding: "8px 12px",
                                backgroundColor: "#fff",
                                border: "1px solid #d1d1d1",
                                borderRadius: 8,
                            }}
                        >
                            {items.map((item, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        padding: "5px 0",
                                        borderBottom:
                                            i < items.length - 1
                                                ? "1px solid #eee"
                                                : "none",
                                        fontSize: 12,
                                        color: "#333",
                                    }}
                                >
                                    <span
                                        style={{
                                            width: 6,
                                            height: 6,
                                            borderRadius: "50%",
                                            backgroundColor: "rgb(67 110 119)",
                                            flexShrink: 0,
                                        }}
                                    />
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 8,
                        padding: "8px 24px 18px",
                    }}
                >
                    <Button variant="popup-secondary" onClick={onNo}>
                        {noLabel}
                    </Button>
                    <Button variant="popup-primary" onClick={onYes}>
                        {yesLabel}
                    </Button>
                </div>
            </div>
        </div>
    );
}
