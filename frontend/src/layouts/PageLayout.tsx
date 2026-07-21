import type { ReactNode } from "react";
import Container from "../components/ui/Container";

interface PageLayoutProps {
    title?: string;
    subtitle?: string;
    children: ReactNode;
    contentClassName?: string;
    compact?: boolean;
}

const PageLayout = ({
    title,
    subtitle,
    children,
    compact = false,
    contentClassName,
}: PageLayoutProps) => {
    const heroPadding = compact
        ? "py-4 md:py-6"
        : "py-12 md:py-16";

    const contentPadding =
        contentClassName ??
        (compact
            ? "pt-0 pb-16"
            : "py-16");

    return (
        <main className="min-h-screen bg-slate-950 pt-24">

            {(title || subtitle) && (
                <section className="bg-slate-950">

                    <Container className={heroPadding}>

                        <div className="max-w-6xl">

                            {title && (
                                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                                    {title}
                                </h1>
                            )}

                            {subtitle && (
                                <p className="mt-3 max-w-5xl text-base leading-8 text-slate-400 md:text-lg">
                                    {subtitle}
                                </p>
                            )}

                        </div>

                    </Container>

                </section>
            )}

            <section>

                <Container className={contentPadding}>
                    {children}
                </Container>

            </section>

        </main>
    );
};

export default PageLayout;