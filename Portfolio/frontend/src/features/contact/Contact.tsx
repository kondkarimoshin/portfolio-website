import Container from "../../components/ui/Container";
import FadeIn from "../../components/ui/FadeIn";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/Section";
import Text from "../../components/ui/Text";
import ContactCard from "./components/ContactCard";

const Contact = () => {
    return (
        <Section 
            id="contact"
            aria-labelledby="contact-heading"
        >

            <Container>

                <FadeIn delay={0}>
                    <div className="mx-auto max-w-5xl text-center">

                        <Heading 
                            id="contact-heading" 
                            level={2}
                        >
                            Let's Build Something Great Together
                        </Heading>

                        <Text className="mx-auto mt-5 max-w-3xl">

                            Whether you're looking for a Senior Automation Engineer,
                            QA Architect, Test Automation Lead, or simply want to
                            discuss enterprise quality engineering, I'd love to connect.

                        </Text>

                        <Text className="mx-auto mt-5 max-w-3xl">

                            I'm always interested in solving complex engineering
                            challenges, building scalable automation platforms,
                            mentoring teams, and delivering high-quality software.

                        </Text>

                        <ContactCard />

                    </div>
                </FadeIn>

            </Container>

        </Section>
    );
};

export default Contact;