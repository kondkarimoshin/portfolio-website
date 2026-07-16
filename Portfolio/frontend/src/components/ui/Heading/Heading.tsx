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
        1: "text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl",
        2: "text-3xl font-bold text-white sm:text-4xl",
        3: "text-xl font-semibold text-white sm:text-2xl",
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
                    className={clsx(styles[1], className)}
                >
                    {children}
                </h2>
            );

        case 3:
            return (
                <h3
                    id={id}
                    className={clsx(styles[1], className)}
                >
                    {children}
                </h3>
            );

        default:
            return null;
    }
};

export default Heading;