import { useState } from "react";
import type { ContactItem as ContactItemType } from "../types/ContactItem";

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
                left-2.5
                top-2.5
                rounded-full
                border
                border-cyan-500/30
                bg-cyan-500/10
                px-2
                py-1
                text-[8px]
                font-semibold
                uppercase
                tracking-wider
                text-cyan-300
                transition-all
                duration-300
                group-hover:bg-cyan-500/20
            "
                >
                    Best Way to Reach Me
                </span>

            )}

            {item.copyable && (

                <button
                    type="button"
                    aria-label={`Copy ${item.title}`}
                    onClick={handleCopy}
                    className="
        absolute
        right-2
        top-2
        rounded-md
        border
        border-slate-700
        bg-slate-800/80
        px-3
        py-1.5
        text-xs
        font-medium
        text-slate-300
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:bg-cyan-500/10
        hover:text-cyan-300
    "
                >
                    {copied ? "✓ Copied" : "Copy"}
                </button>

            )}

            <Icon
                aria-hidden="true"
                className="
        mb-3
        h-8
        w-8
        text-cyan-400
        transition-transform
        duration-300
        group-hover:scale-110
    "
            />

            <div className="flex flex-col">

                <p className="text-sm font-medium text-slate-500">
                    {item.title}
                </p>

                <p className="mt-1 text-base font-semibold text-white">
                    {item.value}
                </p>

                {item.subtitle && (

                    <p className="mt-2 text-xs font-medium tracking-wide text-slate-300">
                        {item.subtitle}
                    </p>

                )}

            </div>

        </>
    );

    const cardClassName = `
    group relative
    flex
    min-h-[170px]
    flex-col
    items-center
    justify-center
    rounded-xl
    p-6
    text-center
    transition-all
    duration-300
    hover:scale-105
    active:scale-95

    ${isPrimaryContact
            ? "border border-cyan-500/40 bg-cyan-500/5 shadow-lg shadow-cyan-500/10"
            : "border border-slate-800 bg-slate-900/30"
        }

    hover:-translate-y-1.5
    hover:scale-[1.015]
    hover:border-cyan-400/50
    hover:bg-slate-900/60
    hover:shadow-2xl
    hover:shadow-cyan-500/10
`;
    if (!item.href) {
        return (
            <div className={cardClassName} aria-label={item.title}>
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