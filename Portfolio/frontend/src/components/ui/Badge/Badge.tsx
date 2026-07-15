import type { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
    children: ReactNode;
    className?: string;
}

const Badge = ({ children, className }: BadgeProps) => {
    return (
        <span
            className={clsx(
                "inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium tracking-wide text-blue-400",
                className
            )}
        >
            {children}
        </span>
    );
};

export default Badge;