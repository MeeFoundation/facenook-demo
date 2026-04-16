import { useState } from "react";
import checkmark from "../assets/checkmark.svg";

interface ToggleProps {
  label: string;
  description?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Toggle({
  label,
  description,
  defaultChecked = false,
  onChange,
}: ToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  return (
    <div
      role="switch"
      aria-checked={checked}
      tabIndex={0}
      className="bg-[#f1f5f9] flex flex-col gap-2 w-full px-4 py-3 rounded-lg cursor-pointer select-none"
      onClick={handleToggle}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleToggle()}
    >
      <div className="flex items-center justify-between">
        <span className="font-public-sans font-bold text-base leading-6 tracking-[0.08px] text-[#1e293b]">
          {label}
        </span>
        {/* Pill — background transitions between states */}
        <div className={`relative h-6 w-11 shrink-0 rounded-full border transition-colors duration-200 ${
          checked ? "bg-[#1877f2] border-[#1877f2]" : "bg-[#f8fafc] border-[#94a3b8]"
        }`}>
          {/* Thumb — slides left↔right, cross-fades between dot and circle+checkmark */}
          <div className={`absolute top-1/2 size-5 -translate-y-1/2 rounded-full transition-[left] duration-200 ease-in-out ${
            checked ? "left-[21px]" : "left-[3px]"
          }`}>
            {/* Inactive: centered dark dot */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-150 ${
              checked ? "opacity-0" : "opacity-100"
            }`}>
              <div className="size-3 rounded-full bg-[#334155]" />
            </div>
            {/* Active: white circle with checkmark + shadow */}
            <div className={`absolute inset-0 rounded-full bg-white flex items-center justify-center shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_1px_1px_0px_rgba(0,0,0,0.06)] transition-opacity duration-150 ${
              checked ? "opacity-100" : "opacity-0"
            }`}>
              <img src={checkmark} alt="" aria-hidden className="block w-[8.25px] h-[6.75px]" />
            </div>
          </div>
        </div>
      </div>
      {description && (
        <p className="font-public-sans font-normal text-base leading-6 tracking-[0.08px] text-[#0f172a]">
          {description}
        </p>
      )}
    </div>
  );
}
