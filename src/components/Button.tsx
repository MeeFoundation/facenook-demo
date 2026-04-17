import type { ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "teal"
  | "popup-primary"
  | "popup-secondary"
  | "ghost"
  | "mee-primary"
  | "mee-secondary"
  | "mee-text"
  | "sedi-primary"
  | "sedi-secondary"
  | "sedi-gradient"
  | "cancel";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "w-full py-3.5 bg-[#1877f2] text-white rounded-lg text-base font-semibold cursor-pointer hover:bg-[#166fe5] transition-colors",
  secondary:
    "w-full py-3.5 bg-white text-gray-800 border border-gray-300 rounded-lg text-base font-semibold cursor-pointer hover:bg-gray-50 transition-colors",
  teal:
    "w-full py-3 bg-[rgb(67_110_119)] text-white rounded-lg text-[15px] font-semibold cursor-pointer hover:bg-[rgb(57_100_109)] transition-colors",
  "popup-primary":
    "px-5 py-1.5 text-[13px] font-semibold rounded-md border border-[rgb(67_110_119)] bg-[rgb(67_110_119)] text-white cursor-pointer font-[inherit]",
  "popup-secondary":
    "px-5 py-1.5 text-[13px] font-medium rounded-md border border-[#c0c0c0] bg-gradient-to-b from-white to-[#e8e8e8] text-[#1a1a1a] cursor-pointer font-[inherit]",
  ghost:
    "bg-transparent border-none text-[28px] cursor-pointer text-gray-800 py-2",
  "mee-primary":
    "w-full py-[10px] bg-[#1877f2] text-white rounded-lg text-base font-semibold leading-6 tracking-[0.08px] font-public-sans cursor-pointer hover:bg-[#166fe5] transition-colors",
  "mee-secondary":
    "w-full py-[10px] bg-transparent text-[#1877f2] border border-[#1877f2] rounded-lg text-base font-semibold leading-6 tracking-[0.08px] font-public-sans cursor-pointer hover:bg-blue-50 transition-colors",
  "mee-text":
    "w-full py-[10px] bg-transparent text-[#334155] rounded-lg text-base font-semibold leading-6 tracking-[0.08px] font-public-sans cursor-pointer hover:text-[#1e293b] transition-colors",
  "sedi-primary":
    "w-full py-[10px] bg-[#436e77] text-white rounded-lg text-base font-semibold leading-6 tracking-[0.08px] font-public-sans cursor-pointer hover:bg-[#37595f] transition-colors",
  "sedi-secondary":
    "w-full py-[10px] bg-transparent text-[#436e77] border border-[#436e77] rounded-lg text-base font-semibold leading-6 tracking-[0.08px] font-public-sans cursor-pointer hover:bg-[#f0f7f8] transition-colors",
  "sedi-gradient":
    "w-full py-[10px] bg-[linear-gradient(112.89deg,rgb(59,91,99)_0%,rgb(79,134,142)_100%)] text-white border border-[#4f868e] rounded-xl text-base font-semibold leading-6 tracking-[0.08px] font-public-sans cursor-pointer hover:opacity-90 transition-opacity",
  cancel:
    "py-[7px] px-[18px] bg-[#f8fafc] text-[#334155] border border-[#cbd5e1] rounded-xl text-xs font-semibold leading-4 tracking-[0.06px] font-public-sans cursor-pointer hover:bg-[#f1f5f9] transition-colors",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
