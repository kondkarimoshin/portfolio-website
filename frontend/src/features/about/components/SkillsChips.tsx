import Badge from "../../../components/ui/Badge";
import { skills } from "../constants/skills.data";

const SkillsChips = () => {
    return (
        <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
                <Badge key={skill}>
                    {skill}
                </Badge>
            ))}
        </div>
    );
};

export default SkillsChips;