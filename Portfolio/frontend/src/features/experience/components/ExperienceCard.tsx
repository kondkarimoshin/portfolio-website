import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

import Text from "../../../components/ui/Text";
import BusinessImpact from "./BusinessImpact";
import Responsibilities from "./Responsibilities";
import KeyProjects from "./KeyProjects";
import TechnologyStack from "./TechnologyStack";

import type { Experience } from "../types/experience";

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition-all duration-300 hover:border-blue-500/40">

            {/* ============================== */}
            {/* Header */}
            {/* ============================== */}

            <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                aria-controls="current-experience-content"
                className="flex w-full flex-col gap-6 text-left lg:flex-row lg:items-start lg:justify-between"
            >
                {/* Company */}

                <div>

                    <h3 className="text-2xl font-bold text-white">
                        {experience.company}
                    </h3>

                    <p className="mt-2 text-lg font-medium text-cyan-400">
                        {experience.role}
                    </p>

                    <p className="mt-3 text-slate-400">
                        {experience.location}
                    </p>

                </div>

                {/* Duration + Chevron */}

                <div className="flex items-center gap-3">

                    <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-white">
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

            {/* ============================== */}
            {/* Expandable Content */}
            {/* ============================== */}

            <div
                id="current-experience-content"
                className={`overflow-hidden transition-all duration-500 ${expanded
                    ? "max-h-[6000px] opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
            >

                {/* Divider */}

                <div className="mt-4 mb-6 border-t border-slate-800"></div>

                {/* Domain */}

                <div>

                    <h4 className="text-lg font-semibold text-cyan-400">
                        Domain
                    </h4>

                    <p className="mt-3 leading-8 text-slate-400">
                        {experience.domain.join(" • ")}
                    </p>

                </div>

                {/* Professional Summary */}

                <div className="mt-10">

                    <h4 className="text-lg font-semibold text-cyan-400">
                        Professional Summary
                    </h4>

                    <Text className="mt-4 leading-8">
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
                        Technologies
                    </h4>

                    <TechnologyStack
                        technologies={experience.technologies}
                    />

                </div>

            </div>

        </div>
    );
};

export default ExperienceCard;