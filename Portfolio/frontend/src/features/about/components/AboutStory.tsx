import Text from "../../../components/ui/Text";
import SkillsChips from "./SkillsChips";

const AboutStory = () => {
    return (
        <div>
            <Text className="leading-8 text-slate-300">

                <span className="text-xl font-semibold text-white">
                    Who I Am
                </span>

                <br />
                <br />

                I am a <span className="font-semibold text-white">Senior Automation Engineer</span> with over <span className="font-semibold text-cyan-400">16 years of experience</span> delivering enterprise automation solutions for global banking and financial institutions. My passion is building automation that is scalable, maintainable, and engineered for long-term success.

                <br />
                <br />

                <span className="text-xl font-semibold text-white">
                    What I Build
                </span>

                <br />
                <br />

                Throughout my career, I have designed enterprise automation frameworks, cloud-native testing platforms, and quality engineering solutions for mission-critical applications across <span className="font-semibold text-white">Capital Markets, Equities Trading, and Enterprise Banking</span>. My focus is always on improving software quality, accelerating delivery, and enabling engineering teams to move with confidence.

                <br />
                <br />

                <span className="text-xl font-semibold text-white">
                    Leadership & Engineering
                </span>

                <br />
                <br />

                Beyond automation development, I lead technical initiatives by defining automation strategies, reviewing solution designs, mentoring engineers, establishing engineering standards, and driving continuous improvement across teams. I believe great engineering is built through collaboration, knowledge sharing, and ownership.

                <br />
                <br />

                <span className="text-xl font-semibold text-white">
                    Innovation
                </span>

                <br />
                <br />

                My experience includes contributing to automation for patent-approved engineering solutions, building robust cloud-native testing ecosystems, integrating CI/CD pipelines, and embracing AI-assisted development to improve productivity while maintaining engineering excellence.

            </Text>

            <SkillsChips />
        </div>
    );
};

export default AboutStory;