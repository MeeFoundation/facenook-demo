import { useState, useEffect } from "react";
import { Button } from "./Button";

interface AgeVerifyPopupProps {
  onConfirm: (source: string) => void;
  onCancel: () => void;
}

const cards = [
  { id: "utah-sedi", title: "Utah SEDI Certificate", confirmation: "age > 13" },
  {
    id: "drivers-licence",
    title: "Driver's Licence",
    confirmation: "age > 13",
  },
];

export function AgeVerifyPopup({ onConfirm, onCancel }: AgeVerifyPopupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
      if (e.key === "Enter") onConfirm(cards[selectedIndex].id);
      if (e.key === "ArrowLeft") setSelectedIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight")
        setSelectedIndex((i) => Math.min(cards.length - 1, i + 1));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onConfirm, onCancel, selectedIndex]);

  const CARD_WIDTH = 200;
  const GAP = 12;

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
          width: 380,
          backgroundColor: "#f0f0f0",
          border: "1px solid #999",
          borderRadius: 8,
          boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.08)",
          fontFamily:
            '-apple-system, "Segoe UI", system-ui, BlinkMacSystemFont, sans-serif',
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "12px 14px",
            borderBottom: "1px solid #d1d1d1",
            background: "linear-gradient(to bottom, #fafafa, #e8e8e8)",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#1a1a1a",
            }}
          >
            Share with Facenook
          </span>
        </div>

        {/* Carousel */}
        <div
          style={{
            padding: "20px 0 16px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Left / right arrow buttons */}
          <button
            onClick={() => setSelectedIndex((i) => Math.max(0, i - 1))}
            style={{
              position: "absolute",
              left: 6,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              width: 28,
              height: 28,
              borderRadius: "50%",
              border: "none",
              backgroundColor:
                selectedIndex > 0 ? "rgba(0,0,0,0.25)" : "transparent",
              color: selectedIndex > 0 ? "#fff" : "transparent",
              cursor: selectedIndex > 0 ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 700,
              lineHeight: 1,
              padding: 0,
            }}
            aria-label="Previous"
          >
            &#8249;
          </button>
          <button
            onClick={() =>
              setSelectedIndex((i) => Math.min(cards.length - 1, i + 1))
            }
            style={{
              position: "absolute",
              right: 6,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              width: 28,
              height: 28,
              borderRadius: "50%",
              border: "none",
              backgroundColor:
                selectedIndex < cards.length - 1
                  ? "rgba(0,0,0,0.25)"
                  : "transparent",
              color: selectedIndex < cards.length - 1 ? "#fff" : "transparent",
              cursor: selectedIndex < cards.length - 1 ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 700,
              lineHeight: 1,
              padding: 0,
            }}
            aria-label="Next"
          >
            &#8250;
          </button>

          {/* Sliding track */}
          <div
            style={{
              display: "flex",
              gap: GAP,
              transition: "transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)",
              transform: `translateX(calc(50% - ${CARD_WIDTH / 2}px - ${selectedIndex * (CARD_WIDTH + GAP)}px))`,
            }}
          >
            {cards.map((card, i) => {
              const isSelected = i === selectedIndex;
              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedIndex(i)}
                  style={{
                    width: CARD_WIDTH,
                    flexShrink: 0,
                    padding: "16px 14px",
                    borderRadius: 10,
                    border: isSelected
                      ? "2px solid rgb(67 110 119)"
                      : "2px solid #d1d1d1",
                    backgroundColor: isSelected
                      ? "rgba(67, 110, 119, 0.06)"
                      : "#fff",
                    cursor: "pointer",
                    transition: "all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)",
                    textAlign: "center",
                    opacity: isSelected ? 1 : 0.4,
                    transform: isSelected ? "scale(1)" : "scale(0.92)",
                  }}
                >
                  {/* Radio indicator */}
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      border: isSelected
                        ? "2px solid rgb(67 110 119)"
                        : "2px solid #bbb",
                      backgroundColor: isSelected
                        ? "rgb(67 110 119)"
                        : "transparent",
                      margin: "0 auto 12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {isSelected && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4l3 3 5-6"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#1a1a1a",
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    style={{
                      margin: "8px 0 0",
                      fontSize: 11,
                      color: "#666",
                      lineHeight: 1.3,
                    }}
                  >
                    {card.confirmation}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Carousel dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 6,
              marginTop: 16,
            }}
          >
            {cards.map((_, i) => (
              <div
                key={i}
                onClick={() => setSelectedIndex(i)}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor:
                    i === selectedIndex ? "rgb(67 110 119)" : "#ccc",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
              />
            ))}
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
          <Button variant="popup-secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant="popup-primary"
            onClick={() => onConfirm(cards[selectedIndex].id)}
          >
            Share
          </Button>
        </div>
      </div>
    </div>
  );
}
