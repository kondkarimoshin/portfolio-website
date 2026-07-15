import type { ReactNode } from "react";
import clsx from "clsx";

interface TextProps {
    children: ReactNode;
    className?: string;
}

const Text = ({ children, className }: TextProps) => {
    return (
        <p
            className={clsx(
                "text-lg leading-8 text-slate-400",
                className
            )}
        >
            {children}
        </p>
    );
};

export default Text;