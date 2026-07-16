import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/Section";
import Text from "../../components/ui/Text";
import ContactCard from "./components/ContactCard";

const Contact = () => {
    return (
        <Section id="contact">

            <Container>

                <div className="mx-auto max-w-5xl text-center">

                    <Heading level={2}>
                        Let's Build Something Great Together
                    </Heading>

                    <Text className="mx-auto mt-5 max-w-3xl leading-8">

                        Whether you're looking for a Senior Automation Engineer,
                        QA Architect, Test Automation Lead, or simply want to
                        discuss enterprise quality engineering, I'd love to connect.

                    </Text>

                    <Text className="mx-auto mt-5 max-w-3xl leading-8">

                        I'm always interested in solving complex engineering
                        challenges, building scalable automation platforms,
                        mentoring teams, and delivering high-quality software.

                    </Text>

                    <ContactCard />

                </div>

            </Container>

        </Section>
    );
};

export default Contact;