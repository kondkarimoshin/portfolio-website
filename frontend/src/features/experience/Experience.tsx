import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/Section";
import ExperienceCard from "./components/ExperienceCard";
import CareerJourney from "./components/CareerJourney";
import FadeIn from "../../components/animations/FadeIn";
import { EXPERIENCE_DATA } from "./constants/experience.data";

const Experience = () => {
    return (
        <Section
            id="experience"
            aria-labelledby="experience-heading"
        >
            <Container>
                <FadeIn delay={0}>

                    <div className="mx-auto max-w-5xl">

                        <Heading
                            id="experience-heading"
                            level={2}
                            className="mb-10 text-center"
                        >
                            Experience
                        </Heading>

                        <ExperienceCard experience={EXPERIENCE_DATA} />

                        <CareerJourney />

                    </div>

                </FadeIn>
            </Container>
        </Section>
    );
};

export default Experience;