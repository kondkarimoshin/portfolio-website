import type { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-lg px-8 py-3 font-semibold transition duration-300",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-500"
          : "border border-slate-600 text-white hover:border-blue-500 hover:text-blue-400"
      )}
    >
      {children}
    </button>
  );
};

export default Button;