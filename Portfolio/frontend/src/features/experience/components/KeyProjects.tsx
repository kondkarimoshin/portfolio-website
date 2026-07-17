import type { Project } from "../types/experience";

interface KeyProjectsProps {
    projects: Project[];
}

const KeyProjects = ({ projects }: KeyProjectsProps) => {
    return (
        <div className="mt-6 space-y-5">

            {projects.map((project) => (

                <div
                    key={project.name}
                    className="rounded-xl border border-slate-800 bg-slate-900/30 p-5"
                >

                    <h5 className="text-lg font-semibold text-blue-400">
                        {project.name}
                    </h5>

                    <p className="mt-3 text-slate-300">
                        {project.overview}
                    </p>

                    <ul className="mt-4 space-y-3 text-slate-300">

                        {project.keyContributions.map((highlight) => (

                            <li
                                key={highlight}
                                className="flex items-start gap-3"
                            >

                                <span className="mt-1 text-blue-400">
                                    ✔
                                </span>

                                <span>
                                    {highlight}
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