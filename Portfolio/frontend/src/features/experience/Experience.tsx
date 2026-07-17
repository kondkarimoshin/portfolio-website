import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/Section";
import Text from "../../components/ui/Text";
import ExperienceCard from "./components/ExperienceCard";
import CareerJourney from "./components/CareerJourney";
import FadeIn from "../../components/ui/FadeIn";

const Experience = () => {
    return (
        <Section
            id="experience"
            aria-labelledby="experience-heading"
        >
            <Container>
                <FadeIn delay={0}>

                    <div className="mx-auto max-w-5xl">

                        {/* ============================== */}
                        {/* Section Heading */}
                        {/* ============================== */}

                        <Heading
                            id="experience-heading"
                            level={2}
                            className="text-center"
                        >
                            Experience
                        </Heading>

                        <Text className="mx-auto mt-4 max-w-3xl text-center">
                            A journey of building enterprise-grade automation
                            solutions, leading automation initiatives, and delivering
                            high-quality software for mission-critical financial
                            systems.
                        </Text>

                        {/* ============================== */}
                        {/* Experience Card */}
                        {/* ============================== */}

                        <ExperienceCard />

                        <CareerJourney />

                    </div>
                </FadeIn>

            </Container>

        </Section>
    );
};

export default Experience;