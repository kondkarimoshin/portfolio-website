import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/Section";
import Text from "../../components/ui/Text";

import SkillCategory from "./components/SkillCategory";
import { skillsData } from "./constants/skillsData";

const Skills = () => {
    return (
        <Section
            id="skills"
            className="pt-2 lg:pt-4"
        >
            <Container>

                <div className="mx-auto max-w-6xl">

                    <Heading
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

                        {skillsData.map((category) => (

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