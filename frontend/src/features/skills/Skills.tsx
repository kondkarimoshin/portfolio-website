import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/Section";
import Text from "../../components/ui/Text";

import SkillCategory from "./components/SkillCategory";
import { SKILL_DATA } from "./constants/skills.data";

const Skills = () => {
    return (
        <Section
            id="skills"
            aria-labelledby="skills-heading"
        >
            <Container>

                <div className="mx-auto max-w-6xl">

                    <Heading
                        id="skills-heading"
                        level={2}
                        className="text-center"
                    >
                        Technical Expertise
                    </Heading>

                    <Text className="mx-auto mt-4 max-w-4xl text-center">
                        A comprehensive enterprise technology stack built across
                        software engineering, automation, cloud platforms,
                        AI-assisted development, and capital markets through
                        15+ years of professional experience.
                    </Text>

                    <div className="mt-12 grid gap-5 lg:grid-cols-2">

                        {SKILL_DATA.map((category) => (

                            <SkillCategory
                                key={category.title}
                                title={category.title}
                                skills={category.skills}
                            />

                        ))}

                    </div>

                </div>

            </Container>
        </Section>
    );
};

export default Skills;