import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
}

const Section = ({
    id,
    children,
    className,
}: SectionProps) => {
    return (
        <section
            id={id}
            className={clsx(
                "scroll-mt-24 py-10 lg:scroll-mt-28 lg:py-16",
                className
            )}
        >
            {children}
        </section>
    );
};

export default Section;