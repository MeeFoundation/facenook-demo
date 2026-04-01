import type { ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "teal"
  | "popup-primary"
  | "popup-secondary"
  | "ghost";

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
