import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="py-24">
      {children}
    </section>
  );
};

export default Section;