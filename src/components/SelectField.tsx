import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import questionCircle from "../assets/icon-question-circle.svg";
import { Tooltip } from "./Tooltip";

export interface SelectFieldOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  showTooltip?: boolean;
  tooltipText?: string;
  value: string;
  onChange?: (value: string) => void;
  options: SelectFieldOption[];
}

export function SelectField({ label, showTooltip = false, tooltipText, value, onChange, options }: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (!buttonRef.current?.contains(target) && !listRef.current?.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleToggle() {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: "fixed",
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width,
      });
    }
    setOpen(o => !o);
  }

  const selectedLabel = options.find(o => o.value === value)?.label ?? "";

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center h-4 px-0.5">
        <span className="text-base font-normal leading-6 tracking-[0.08px] text-[#1e293b] font-public-sans">
          {label}
        </span>
        {showTooltip && (
          <Tooltip text={tooltipText ?? ""}>
            <div className="flex items-center pl-1">
              <img src={questionCircle} alt="" aria-hidden className="size-4 shrink-0 cursor-help" />
            </div>
          </Tooltip>
        )}
      </div>
      <button
        ref={buttonRef}
        type="button"
        onClick={handleToggle}
        className={`flex items-center justify-between h-11 w-full rounded-xl border px-3 bg-white text-base text-left text-[#1e293b] tracking-[0.08px] font-public-sans outline-none transition-colors ${open ? "border-[#1877f2]" : "border-[#cbd5e1]"}`}
      >
        <span>{selectedLabel}</span>
        <svg
          aria-hidden
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M3 5.5L8 10.5L13 5.5" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && createPortal(
        <ul
          ref={listRef}
          role="listbox"
          style={dropdownStyle}
          className="z-9999 bg-white border border-[#cbd5e1] rounded-xl shadow-md overflow-hidden animate-fade-in-up"
        >
          {options.map(opt => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              onMouseDown={() => { onChange?.(opt.value); setOpen(false); }}
              className={`px-3 py-2.5 cursor-pointer text-base tracking-[0.08px] font-public-sans transition-colors ${
                opt.value === value
                  ? "bg-[#1877f2] text-white"
                  : "text-[#1e293b] hover:bg-[#f1f5f9]"
              }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>,
        document.body
      )}
    </div>
  );
}
