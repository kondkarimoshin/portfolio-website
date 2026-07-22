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
        ? "py-3 md:py-4"
        : "py-8 md:py-10";

    const contentPadding =
        contentClassName ??
        (compact
            ? "pt-0 pb-12"
            : "py-12");

    return (
        <main className="min-h-screen bg-slate-950 pt-6">

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