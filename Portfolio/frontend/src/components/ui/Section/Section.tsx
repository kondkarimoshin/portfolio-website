import type { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
}

const Section = ({ children, className = "" }: SectionProps) => {
    return (
        <section className={`py-12 lg:py-20 ${className}`}>
            {children}
        </section>
    );
};

export default Section;