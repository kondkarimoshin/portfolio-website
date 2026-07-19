import Badge from "../../../components/ui/Badge";
import { categoryIcons } from "../constants/category-icons.map";
import { technologyIcons } from "../constants/technology-icons.map";

interface SkillCategoryProps {
    title: string;
    skills: string[];
}

const SkillCategory = ({
    title,
    skills,
}: SkillCategoryProps) => {

    const Icon = categoryIcons[title as keyof typeof categoryIcons];

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/10">
            <div className="mb-6 flex items-center gap-3">

                <Icon
                    aria-hidden="true"
                    className="h-5 w-5 text-cyan-400" />

                <h3 className="text-lg font-semibold text-white">
                    {title}
                </h3>

            </div>

            <ul className="flex flex-wrap gap-3">

                {skills.map((skill) => {
                    const SkillIcon =
                        technologyIcons[skill as keyof typeof technologyIcons];

                    return (
                        <li key={skill}>
                            <Badge className="text-white">
                                <div className="flex items-center gap-2">
                                    {SkillIcon && (
                                        <SkillIcon
                                            aria-hidden="true"
                                            className="h-4 w-4 text-cyan-400"
                                        />
                                    )}

                                    <span>{skill}</span>
                                </div>
                            </Badge>
                        </li>
                    );
                })}

            </ul>

        </div>
    );
};

export default SkillCategory;