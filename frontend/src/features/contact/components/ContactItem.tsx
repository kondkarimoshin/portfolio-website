import { useState } from "react";
import type { ContactItem as ContactItemType } from "../types/contact-item.types";

interface ContactItemComponentProps {
    item: ContactItemType;
}

const ContactItem = ({ item }: ContactItemComponentProps) => {
    const Icon = item.icon;

    const isPrimaryContact = item.title === "Email";

    const [copied, setCopied] = useState(false);

    const handleCopy = async (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault();
        event.stopPropagation();

        if (!item.copyable || !item.copyValue) {
            return;
        }

        await navigator.clipboard.writeText(item.copyValue);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    const cardContent = (
        <>
            {isPrimaryContact && (
                <span
                    className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        border
                        border-cyan-500/30
                        bg-cyan-500/10
                        px-3
                        py-1
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-cyan-300
                    "
                >
                    Preferred Contact
                </span>
            )}

            {item.copyable && (
                <button
                    type="button"
                    aria-label={`Copy ${item.title}`}
                    onClick={handleCopy}
                    className="
                        absolute
                        right-4
                        top-4
                        rounded-lg
                        border
                        border-slate-700
                        bg-slate-800/70
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-slate-300
                        transition-all
                        duration-300
                        hover:border-cyan-400
                        hover:text-cyan-300
                    "
                >
                    {copied ? "✓ Copied" : "Copy"}
                </button>
            )}

            <div
                className="
                    mb-5
                    rounded-xl
                    bg-cyan-400/10
                    p-3
                    transition-all
                    duration-300
                    group-hover:bg-cyan-400/15
                "
            >
                <Icon
                    aria-hidden="true"
                    className="
                        h-7
                        w-7
                        text-cyan-400
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    "
                />
            </div>

            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                {item.title}
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
                {item.value}
            </p>

            {item.subtitle && (
                <p className="mt-3 text-sm text-slate-400">
                    {item.subtitle}
                </p>
            )}
        </>
    );

    const cardClassName = `
        group
        relative
        flex
        min-h-[180px]
        flex-col
        items-center
        justify-center
        rounded-2xl
        p-6
        text-center
        transition-all
        duration-300
        ease-out

        ${
            isPrimaryContact
                ? "border border-cyan-500/40 bg-cyan-500/5"
                : "border border-slate-800 bg-slate-900/30"
        }

        hover:-translate-y-1
        hover:border-cyan-400/50
        hover:bg-slate-900/60
        hover:shadow-[0_10px_30px_rgba(34,211,238,0.08)]
    `;

    if (!item.href) {
        return (
            <div
                className={cardClassName}
                aria-label={item.title}
            >
                {cardContent}
            </div>
        );
    }

    return (
        <a
            href={item.href}
            aria-label={item.title}
            className={cardClassName}
            download={item.download}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
        >
            {cardContent}
        </a>
    );
};

export default ContactItem;