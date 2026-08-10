import { useState } from "react";
import {
    HiBriefcase,
    HiChevronDown,
    HiChevronUp,
} from "react-icons/hi2";

import PreviousExperienceCard from "./PreviousExperienceCard";
import { previousExperience } from "../constants/experience.data";

const CareerJourney = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="mt-12">

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">

                <button
                    type="button"
                    onClick={() => setExpanded((prev) => !prev)}
                    aria-expanded={expanded}
                    aria-controls="career-journey-content"
                    className="flex w-full items-start justify-between gap-6 p-6 text-left"
                >

                    <div className="flex items-start gap-4">

                        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3">
                            <HiBriefcase
                                aria-hidden="true"
                                className="h-6 w-6 text-cyan-400"
                            />
                        </div>

                        <div>

                            <h3 className="text-2xl font-bold text-white">
                                Career Journey
                            </h3>

                            <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                                The experiences that shaped my engineering foundation
                                and prepared me to lead enterprise automation
                                initiatives across global Capital Markets platforms.
                            </p>

                            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-slate-400">

                                <span>3 Organizations</span>

                                <span className="text-slate-600">•</span>

                                <span>2010 – 2016</span>

                                <span className="text-slate-600">•</span>

                                <span>6 Years of Growth</span>

                            </div>

                        </div>

                    </div>

                    <div className="rounded-full bg-cyan-500/10 p-2 text-cyan-400">

                        {expanded ? (
                            <HiChevronUp
                                aria-hidden="true"
                                className="h-5 w-5"
                            />
                        ) : (
                            <HiChevronDown
                                aria-hidden="true"
                                className="h-5 w-5"
                            />
                        )}

                    </div>

                </button>

                {expanded && (

                    <div
                        id="career-journey-content"
                        className="border-t border-slate-800 p-6"
                    >

                        <div className="space-y-6">

                            {previousExperience.map((experience) => (

                                <PreviousExperienceCard
                                    key={experience.company}
                                    {...experience}
                                />

                            ))}

                        </div>

                    </div>

                )}

            </div>

        </div>
    );
};

export default CareerJourney;