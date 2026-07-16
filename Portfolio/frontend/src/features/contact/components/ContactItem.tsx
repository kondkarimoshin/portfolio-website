import type { ContactItem as ContactItemType } from "../types/ContactItem";

interface ContactItemComponentProps {
    item: ContactItemType;
}

const ContactItem = ({ item }: ContactItemComponentProps) => {

    const Icon = item.icon;

    const cardContent = (
        <>
            <Icon aria-hidden="true" className="mb-3 h-8 w-8 text-cyan-400" />

            <div className="flex flex-col">

                <p className="text-sm font-medium text-slate-500">
                    {item.title}
                </p>

                <p className="mt-1 text-base font-semibold text-white">
                    {item.value}
                </p>

            </div>
        </>
    );

    const cardClassName =
        "flex min-h-[170px] flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/30 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/50 hover:shadow-lg hover:shadow-cyan-400/10";

    if (!item.href) {
        return (
            <div className={cardClassName}  aria-label={item.title}>
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