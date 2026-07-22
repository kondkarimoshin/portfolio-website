import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/Section";

import AboutStory from "./components/AboutStory";
import AboutHighlights from "./components/AboutHighlights";

const About = () => {
    return (
        <Section
            id="about"
            variant="default"
            aria-labelledby="about-heading"
        >
            <Container>
                <Heading
                    id="about-heading"
                    level={2}
                    className="text-center"
                >
                    Beyond the Resume
                </Heading>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">

                    <AboutStory />

                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <AboutHighlights />
                    </div>

                </div>
            </Container>
        </Section>
    );
};

export default About;