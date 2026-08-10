import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

import Text from "../../../components/ui/Text";
import BusinessImpact from "./BusinessImpact";
import Responsibilities from "./Responsibilities";
import KeyProjects from "./KeyProjects";
import TechnologyStack from "./TechnologyStack";

import type { Experience } from "../types/experience.types";

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">

            <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                aria-controls="current-experience-content"
                className="flex w-full flex-col gap-6 text-left lg:flex-row lg:items-start lg:justify-between"
            >

                <div>

                    <h3 className="text-3xl font-bold tracking-tight text-white">
                        {experience.company}
                    </h3>

                    <p className="mt-2 text-xl font-semibold text-cyan-400">
                        {experience.role}
                    </p>

                    <p className="mt-3 text-slate-400">
                        {experience.location}
                    </p>

                </div>

                <div className="flex items-center gap-3">

                    <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-white">
                        {experience.duration}
                    </div>

                    <div className="rounded-full bg-cyan-500/10 p-2 text-cyan-400 transition-transform duration-300">

                        {expanded ? (
                            <HiChevronUp className="h-5 w-5" />
                        ) : (
                            <HiChevronDown className="h-5 w-5" />
                        )}

                    </div>

                </div>

            </button>

            {expanded && (
                <div id="current-experience-content">

                    <div className="mb-6 mt-5 border-t border-slate-800" />

                    {/* Domain */}

                    <div>

                        <h4 className="text-lg font-semibold text-cyan-400">
                            Domain Expertise
                        </h4>

                        <p className="mt-3 leading-8 text-slate-400">
                            {experience.domain.join(" • ")}
                        </p>

                    </div>

                    {/* Role Overview */}

                    <div className="mt-10">

                        <h4 className="text-lg font-semibold text-cyan-400">
                            Role Overview
                        </h4>

                        <Text className="mt-4 leading-8 lg:text-justify">
                            {experience.summary}
                        </Text>

                    </div>

                    {/* Responsibilities */}

                    <div className="mt-10">

                        <h4 className="text-lg font-semibold text-cyan-400">
                            Key Responsibilities
                        </h4>

                        <Responsibilities
                            responsibilities={experience.responsibilities}
                        />

                    </div>

                    {/* Business Impact */}

                    <div className="mt-10">

                        <h4 className="text-lg font-semibold text-cyan-400">
                            Business Impact
                        </h4>

                        <BusinessImpact
                            impacts={experience.businessImpacts}
                        />

                    </div>

                    {/* Projects */}

                    <div className="mt-10">

                        <h4 className="text-lg font-semibold text-cyan-400">
                            Key Enterprise Projects
                        </h4>

                        <KeyProjects
                            projects={experience.projects}
                        />

                    </div>

                    {/* Technologies */}

                    <div className="mt-10">

                        <h4 className="text-lg font-semibold text-cyan-400">
                            Technologies & Tools Used
                        </h4>

                        <TechnologyStack
                            technologies={experience.technologies}
                        />

                    </div>

                </div>
            )}

        </div>
    );
};

export default ExperienceCard;