import type { IconType } from "react-icons";

interface TechnologyChipProps {
    label: string;
    icon?: IconType;
}

const TechnologyChip = ({
    label,
    icon: Icon,
}: TechnologyChipProps) => {
    return (
        <div
            className="
                group
                inline-flex
                items-center
                gap-2.5
                rounded-lg
                border
                border-slate-700/60
                bg-slate-800/40
                px-4
                py-2.5
                text-sm
                font-medium
                text-slate-300
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-cyan-400
                hover:bg-cyan-400/5
                hover:text-white
                hover:shadow-[0_6px_18px_rgba(34,211,238,0.10)]
            "
        >
            {Icon && (
                <Icon
                    className="
                        h-4
                        w-4
                        flex-shrink-0
                        text-cyan-400
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:rotate-3
                    "
                />
            )}

            <span className="whitespace-nowrap">
                {label}
            </span>
        </div>
    );
};

export default TechnologyChip;