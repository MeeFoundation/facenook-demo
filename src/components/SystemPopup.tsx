import { useEffect } from "react";

interface SystemPopupProps {
  question: string;
  yesLabel?: string;
  noLabel?: string;
  onYes: () => void;
  onNo: () => void;
}

export function SystemPopup({
  question,
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
          boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.08)",
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
            background: "linear-gradient(to bottom, #fafafa, #e8e8e8)",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "linear-gradient(to bottom, #ff6058, #e0443e)",
              border: "1px solid #d94039",
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "linear-gradient(to bottom, #ffbd2e, #dea123)",
              border: "1px solid #cfa01e",
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "linear-gradient(to bottom, #27c93f, #1aab29)",
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
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
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
              <span style={{ color: "#fff", fontSize: 22, fontWeight: 700 }}>
                ?
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                lineHeight: 1.5,
                color: "#1a1a1a",
                paddingTop: 2,
              }}
            >
              {question}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            padding: "8px 24px 18px",
          }}
        >
          <button
            onClick={onNo}
            style={{
              padding: "6px 20px",
              fontSize: 13,
              fontFamily: "inherit",
              borderRadius: 6,
              border: "1px solid #c0c0c0",
              background: "linear-gradient(to bottom, #fff, #e8e8e8)",
              color: "#1a1a1a",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            {noLabel}
          </button>
          <button
            onClick={onYes}
            style={{
              padding: "6px 20px",
              fontSize: 13,
              fontFamily: "inherit",
              borderRadius: 6,
              border: "1px solid rgb(67 110 119)",
              backgroundColor: "rgb(67 110 119)",
              color: "#fff",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {yesLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
