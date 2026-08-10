import { categoryIcons } from "../constants/category-icons.map";
import { technologyIcons } from "../constants/technology-icons.map";
import TechnologyChip from "./TechnologyChip";

interface SkillCategoryProps {
    title: string;
    skills: string[];
}

const SkillCategory = ({
    title,
    skills,
}: SkillCategoryProps) => {

    const CategoryIcon =
        categoryIcons[title as keyof typeof categoryIcons];

    return (
        <section
            className="
                group
                rounded-2xl
                border
                border-slate-800/80
                bg-slate-900/20
                p-5
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-cyan-400/50
                hover:shadow-[0_10px_30px_rgba(34,211,238,0.08)]
            "
        >

            <div className="mb-4 flex items-center gap-4">

                <div
                    className="
                        rounded-xl
                        bg-cyan-400/10
                        p-3
                        transition-all
                        duration-300
                        group-hover:bg-cyan-400/15
                    "
                >
                    <CategoryIcon
                        className="
                            h-6
                            w-6
                            text-cyan-400
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                    />
                </div>

                <h3
                    className="
                        text-xl
                        font-semibold
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-cyan-400
                    "
                >
                    {title}
                </h3>

            </div>

            <div className="mb-5 border-t border-slate-800/80" />

            <div className="flex flex-wrap gap-3">

                {skills.map((skill) => {

                    const SkillIcon =
                        technologyIcons[
                            skill as keyof typeof technologyIcons
                        ];

                    return (
                        <TechnologyChip
                            key={skill}
                            label={skill}
                            icon={SkillIcon}
                        />
                    );
                })}

            </div>

        </section>
    );
};

export default SkillCategory;