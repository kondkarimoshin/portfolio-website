import type { ReactNode } from "react";
import Container from "../components/ui/Container";

interface PageLayoutProps {
    title?: string;
    subtitle?: string;
    children: ReactNode;
    contentClassName?: string;
}

const PageLayout = ({
    title,
    subtitle,
    children,
    contentClassName = "py-16",
}: PageLayoutProps) => {
    return (
        <main className="min-h-screen bg-slate-950 pt-24">
            {/* Hero Section */}
            {(title || subtitle) && (
                <section className="border-b border-slate-800 bg-slate-950">
                    <Container className="py-12 md:py-16">
                        <div className="max-w-4xl">
                            {title && (
                                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                                    {title}
                                </h1>
                            )}

                            {subtitle && (
                                <p className="mt-6 text-lg leading-8 text-slate-400">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </Container>
                </section>
            )}

            {/* Page Content */}
            <section>
                <Container className={contentClassName}>
                    {children}
                </Container>
            </section>
        </main>
    );
};

export default PageLayout;