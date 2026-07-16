import type { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
}

const Button = ({
    children,
    variant = "primary",
    type = "button",
    disabled = false,
    className,
    onClick,
}: ButtonProps) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                "rounded-lg px-8 py-3 font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50",
                variant === "primary"
                    ? "bg-cyan-700 text-white hover:bg-cyan-600"
                    : "border border-slate-600 text-white hover:border-cyan-400 hover:text-cyan-400",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;