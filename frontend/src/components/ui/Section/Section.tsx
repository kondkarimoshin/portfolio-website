import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
    variant?: "hero" | "default" | "compact";
}

const Section = ({
    id,
    children,
    className,
    variant = "default",
}: SectionProps) => {
    const spacing = {
        hero: "py-4 lg:py-6",
        default: "py-3 lg:py-4",
        compact: "py-4 lg:py-4",
    };

    return (
        <section
            id={id}
            className={clsx(
                "scroll-mt-24 lg:scroll-mt-28",
                spacing[variant],
                className
            )}
        >
            {children}
        </section>
    );
};

export default Section;