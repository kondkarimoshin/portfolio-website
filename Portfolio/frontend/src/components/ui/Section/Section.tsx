import type { ReactNode } from "react";

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
}

const Section = ({
    id,
    children,
    className = "",
}: SectionProps) => {
    return (
        <section
            id={id}
            className={`scroll-mt-24 py-12 lg:scroll-mt-28 lg:py-20 ${className}`}
        >
            {children}
        </section>
    );
};

export default Section;