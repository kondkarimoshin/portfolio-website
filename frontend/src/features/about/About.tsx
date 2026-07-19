import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/Section";

import AboutStory from "./components/AboutStory";
import AboutHighlights from "./components/AboutHighlights";

const About = () => {
    return (
        <Section
            id="about"
            aria-labelledby="about-heading"
        >
            <Container>
                <Heading
                    id="about-heading"
                    level={2}
                    className="text-center"
                >
                    About Me
                </Heading>

                <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
                    <AboutStory />

                    <AboutHighlights />
                </div>
            </Container>
        </Section>
    );
};

export default About;