import Container from "../../components/ui/Container";
import FadeIn from "../../components/animations/FadeIn";
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
                            Let's Build Reliable Enterprise Software Together
                        </Heading>

                        <Text className="mx-auto mt-6 max-w-2xl text-lg leading-8">

                            Whether you're hiring a{" "}

                            <span className="font-semibold text-cyan-400">
                                Senior Automation Engineer
                            </span>

                            ,{" "}

                            <span className="font-semibold text-cyan-400">
                                QA Architect
                            </span>

                            , or an{" "}

                            <span className="font-semibold text-cyan-400">
                                Engineering Leader
                            </span>

                            , I'd love to discuss how I can help your team deliver
                            reliable, scalable, and high-quality software.

                        </Text>

                        <Text className="mx-auto mt-6 max-w-2xl text-lg leading-8">

                            With <span className="font-semibold text-cyan-400">
                                16+ years
                            </span> years of experience in enterprise automation,
                            capital markets, and cloud-native quality engineering,
                            I'm passionate about building automation platforms,
                            mentoring engineering teams, and driving continuous
                            delivery at scale.

                        </Text>

                        <ContactCard />

                    </div>
                </FadeIn>

            </Container>

        </Section>
    );
};

export default Contact;