import Text from "../../../components/ui/Text";
import SkillsChips from "./SkillsChips";

const AboutStory = () => {
    return (
        <div>
            <Text className="leading-8 text-slate-300">
                I am a{" "}
                <span className="font-semibold text-white">
                    Senior Automation Engineer
                </span>{" "}
                with over{" "}
                <span className="font-semibold text-cyan-400">
                    16 years of experience
                </span>{" "}
                delivering enterprise automation solutions for global banking and financial
                institutions.

                <br />
                <br />

                Throughout my career, I have designed robust, scalable, and maintainable
                automation frameworks for mission-critical applications across{" "}
                <span className="font-semibold text-white">
                    Capital Markets, Equities Trading, and Enterprise Banking
                </span>
                . My focus has always been on building automation platforms that improve
                software quality, accelerate delivery, and support long-term engineering
                excellence.

                <br />
                <br />

                Beyond framework development, I have led automation initiatives across
                multiple enterprise applications, established engineering standards,
                performed technical design and code reviews, mentored engineers, and guided
                teams in adopting automation best practices. I believe great automation is
                built through collaboration, knowledge sharing, and continuous improvement.

                <br />
                <br />

                My experience also includes contributing to automation for
                patent-approved engineering solutions, building cloud-native testing
                platforms, integrating CI/CD pipelines, and leveraging AI-assisted
                development tools to improve engineering productivity while maintaining
                high-quality software delivery.
            </Text>

            <SkillsChips />
        </div>
    );
};

export default AboutStory;