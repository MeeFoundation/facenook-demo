import { useState, useRef } from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export function Tooltip({ text, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLDivElement>(null);

  function show() {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setStyle({
        position: "fixed",
        left: rect.left + rect.width / 2,
        top: rect.top - 8,
        transform: "translateX(-50%) translateY(-100%)",
      });
    }
    setVisible(true);
  }

  return (
    <div
      ref={triggerRef}
      className="inline-flex items-center"
      onMouseEnter={show}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && createPortal(
        <div
          className="z-[9999] max-w-[220px] bg-[#1e293b] text-white text-xs leading-4 tracking-[0.06px] font-public-sans px-3 py-2 rounded-lg shadow-lg pointer-events-none"
          style={style}
        >
          {text}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#1e293b]" />
        </div>,
        document.body
      )}
    </div>
  );
}
