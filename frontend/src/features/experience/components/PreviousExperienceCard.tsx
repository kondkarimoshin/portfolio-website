import { HiCheckCircle } from "react-icons/hi2";

interface PreviousExperienceCardProps {
    stage: string;
    company: string;
    role: string;
    duration: string;
    location: string;
    highlights: string[];
}

const PreviousExperienceCard = ({
    stage,
    company,
    role,
    duration,
    location,
    highlights,
}: PreviousExperienceCardProps) => {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)]">

            {/* Stage */}

            <div className="mb-5 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1">

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    {stage}
                </span>

            </div>

            {/* Header */}

            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                <div className="flex-1">

                    <h3 className="text-2xl font-bold tracking-tight text-white">
                        {role}
                    </h3>

                    <p className="mt-2 text-lg text-slate-300">
                        {company}
                    </p>

                    <p className="mt-3 text-slate-500">
                        {location}
                    </p>

                </div>

                <div className="self-start whitespace-nowrap rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-white">
                    {duration}
                </div>

            </div>

            {/* Divider */}

            <div className="my-6 border-t border-slate-800" />

            {/* Highlights */}

            <ul className="space-y-4">

                {highlights.map((highlight) => (

                    <li
                        key={highlight}
                        className="flex items-start gap-3"
                    >

                        <HiCheckCircle
                            className="mt-1 h-5 w-5 shrink-0 text-cyan-400"
                        />

                        <span className="leading-7 text-slate-300">
                            {highlight}
                        </span>

                    </li>

                ))}

            </ul>

        </div>
    );
};

export default PreviousExperienceCard;