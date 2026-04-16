import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** "sm" = h-11 (44px), "md" = h-14 (56px). Defaults to "sm". */
  inputSize?: "sm" | "md";
}

export function Input({ className = "", inputSize = "sm", ...props }: InputProps) {
  const heightClass = inputSize === "md" ? "h-14" : "h-11";
  return (
    <input
      className={`${heightClass} w-full rounded-xl border border-[#cbd5e1] px-3 text-base text-[#0f172a] placeholder:text-[#64748b] tracking-[0.08px] outline-none transition-colors focus:border-[#1877f2] font-public-sans ${className}`.trim()}
      {...props}
    />
  );
}
