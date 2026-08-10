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
        "text-sm sm:text-base leading-6 sm:leading-7 text-slate-400",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Text;