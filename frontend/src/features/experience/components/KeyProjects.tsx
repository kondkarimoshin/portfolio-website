import { FaCheckCircle } from "react-icons/fa";
import type { Project } from "../types/experience.types";

interface KeyProjectsProps {
    projects: Project[];
}

const KeyProjects = ({ projects }: KeyProjectsProps) => {
    return (
        <div className="space-y-6">

            {projects.map((project) => (

                <div
                    key={project.name}
                    className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:border-cyan-500/30"
                >

                    {/* Project Name */}
                    <h5 className="text-2xl font-semibold text-white">
                        {project.name}
                    </h5>

                    {/* Category */}
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                        {project.category}
                    </p>

                    {/* Overview */}
                    <p className="mt-5 leading-7 text-slate-300">
                        {project.overview}
                    </p>

                    <h6 className="mt-6 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                        Key Contributions
                    </h6>

                    <ul className="space-y-4">

                        {project.keyContributions.map((item) => (

                            <li
                                key={item}
                                className="flex items-start gap-3"
                            >

                                <FaCheckCircle
                                    size={16}
                                    className="mt-1 shrink-0 text-cyan-400"
                                />

                                <span className="leading-7 text-slate-300">
                                    {item}
                                </span>

                            </li>

                        ))}

                    </ul>

                </div>

            ))}

        </div>
    );
};

export default KeyProjects;