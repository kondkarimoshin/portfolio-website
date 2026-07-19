import TechnologyStack from "./TechnologyStack";

interface PreviousExperienceCardProps {
    company: string;
    role: string;
    duration: string;
    location: string;
    summary: string;
    technologies: string[];
}

const PreviousExperienceCard = ({
    company,
    role,
    duration,
    location,
    summary,
    technologies,
}: PreviousExperienceCardProps) => {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10">

            {/* Header */}

            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                <div>

                    <h3 className="text-xl font-bold text-white">
                        {company}
                    </h3>

                    <p className="mt-2 text-lg font-medium text-cyan-400">
                        {role}
                    </p>

                    <p className="mt-2 text-slate-400">
                        {location}
                    </p>

                </div>

                <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-white">
                    {duration}
                </div>

            </div>

            {/* Summary */}

            <p className="mt-6 leading-8 text-slate-300">
                {summary}
            </p>

            {/* Technology Stack */}

            <TechnologyStack
                technologies={technologies}
            />

        </div>
    );
};

export default PreviousExperienceCard;