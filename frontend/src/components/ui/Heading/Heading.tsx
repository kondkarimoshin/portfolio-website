import type { ReactNode } from "react";
import clsx from "clsx";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
  id?: string;
}

const Heading = ({
  children,
  level = 1,
  className,
  id,
}: HeadingProps) => {
  const styles = {
    1: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight",
    2: "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight",
    3: "text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight leading-snug",
  };

  switch (level) {
    case 1:
      return (
        <h1
          id={id}
          className={clsx(styles[1], className)}
        >
          {children}
        </h1>
      );

    case 2:
      return (
        <h2
          id={id}
          className={clsx(styles[2], className)}
        >
          {children}
        </h2>
      );

    case 3:
      return (
        <h3
          id={id}
          className={clsx(styles[3], className)}
        >
          {children}
        </h3>
      );

    default:
      return (
        <h1
          id={id}
          className={clsx(styles[1], className)}
        >
          {children}
        </h1>
      );
  }
};

export default Heading;