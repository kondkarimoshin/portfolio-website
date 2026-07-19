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
        <div className="mt-16">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10 cursor-pointer">

                {/* Header */}

                <button
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                    aria-controls="career-journey-content"
                    className="flex w-full items-center justify-between p-6 text-left"
                >

                    <div className="flex items-start gap-4">

                        <div className="rounded-full bg-cyan-500/10 p-3">
                            <HiBriefcase aria-hidden="true" className="h-6 w-6 text-cyan-400" />
                        </div>

                        <div>

                            <h3 className="text-2xl font-bold text-white">
                                Career Journey
                            </h3>

                            <p className="mt-2 text-slate-350">
                                My professional journey before joining Citibank.
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-350">

                                <span>3 Companies</span>

                                <span>•</span>

                                <span>2010 – 2016</span>

                                <span>•</span>

                                <span>6+ Years Experience</span>

                            </div>

                        </div>

                    </div>

                    <div className="rounded-full bg-cyan-500/10 p-2 text-cyan-400 transition-all duration-300">

                        {expanded ? (
                            <HiChevronUp aria-hidden="true" className="h-5 w-5" />
                        ) : (
                            <HiChevronDown aria-hidden="true" className="h-5 w-5" />
                        )}

                    </div>

                </button>

                {/* Expandable */}

                {expanded && (

                    <div
                        id="career-journey-content"
                        className="border-t border-slate-800 p-6">

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