import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/Section";
import Text from "../../components/ui/Text";

import SkillCategory from "./components/SkillCategory";
import { SKILL_DATA } from "./constants/skills.data";
import FadeIn from "../../components/animations/FadeIn";

const Skills = () => {
    return (
        <Section
            id="skills"
            aria-labelledby="skills-heading"
        >
            <Container>

                <FadeIn delay={0}>

                    <div className="mx-auto max-w-6xl">

                        <Heading
                            id="skills-heading"
                            level={2}
                            className="text-center"
                        >
                            Technical Expertise
                        </Heading>

                        <Text className="mx-auto mt-4 max-w-3xl text-center">
                            Technologies, tools and platforms I've used to build
                            scalable automation frameworks, enterprise applications
                            and cloud-native solutions.
                        </Text>

                        <div className="mt-12 grid gap-6 md:grid-cols-2">

                            {SKILL_DATA.map((category) => (

                                <SkillCategory
                                    key={category.title}
                                    title={category.title}
                                    skills={category.skills}
                                />

                            ))}

                        </div>

                    </div>
                </FadeIn>

            </Container>

        </Section>
    );
};

export default Skills;