import type { ReactNode } from "react";
import clsx from "clsx";

interface HeadingProps {
    children: ReactNode;
    level?: 1 | 2 | 3;
    className?: string;
}

const Heading = ({
    children,
    level = 1,
    className,
}: HeadingProps) => {

    const styles = {
        1: "text-7xl font-extrabold leading-tight text-white",
        2: "text-4xl font-bold text-white",
        3: "text-2xl font-semibold text-white",
    };

    switch (level) {
        case 1:
            return (
                <h1 className={clsx(styles[1], className)}>
                    {children}
                </h1>
            );

        case 2:
            return (
                <h2 className={clsx(styles[2], className)}>
                    {children}
                </h2>
            );

        case 3:
            return (
                <h3 className={clsx(styles[3], className)}>
                    {children}
                </h3>
            );

        default:
            return null;
    }
};

export default Heading;