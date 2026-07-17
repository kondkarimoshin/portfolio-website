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
        1: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
        2: "text-3xl sm:text-4xl font-bold tracking-tight",
        3: "text-xl sm:text-2xl font-semibold tracking-tight",
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
            return styles[1];
    }
};

export default Heading;