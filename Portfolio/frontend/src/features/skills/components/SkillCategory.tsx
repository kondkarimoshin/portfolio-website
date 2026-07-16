import Badge from "../../../components/ui/Badge";
import { skillIcons } from "../constants/skillIcons";

interface SkillCategoryProps {
    title: string;
    skills: string[];
}

const SkillCategory = ({
    title,
    skills,
}: SkillCategoryProps) => {

    const Icon = skillIcons[title as keyof typeof skillIcons];

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

                {skills.map((skill) => (

                    <li key={skill}>

                        <Badge>
                            {skill}
                        </Badge>

                    </li>

                ))}

            </ul>

        </div>
    );
};

export default SkillCategory;