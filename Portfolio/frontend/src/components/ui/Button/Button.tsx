import type { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
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
                "inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50",
                variant === "primary" &&
                "bg-cyan-600 text-white shadow-md shadow-cyan-900/30 hover:-translate-y-0.5 hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30",

                variant === "secondary" &&
                "border border-slate-600 text-white hover:border-cyan-400 hover:text-cyan-400",

                variant === "outline" &&
                "border-2 border-cyan-500 bg-transparent text-white hover:-translate-y-0.5 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-lg hover:shadow-cyan-500/30",

                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;