import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: "hero" | "default" | "compact";
}

const Section = ({
  children,
  id,
  className,
  variant = "default",
}: SectionProps) => {
  return (
    <section
      id={id}
      className={clsx(
        "scroll-mt-24 lg:scroll-mt-28 py-8 lg:py-10",
        {
          // Hero should stay close to the navbar
          "py-4 lg:py-6": variant === "hero",

          // Standard sections
          "py-8 lg:py-10": variant === "default",

          // Smaller sections
          "py-6 lg:py-8": variant === "compact",
        },
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;