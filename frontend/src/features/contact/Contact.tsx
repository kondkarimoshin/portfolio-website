import Container from "../../components/ui/Container";
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

                <div className="mx-auto max-w-5xl text-center">

                    <Heading
                        id="contact-heading"
                        level={2}
                    >
                        Let's Build Reliable Enterprise Software Together
                    </Heading>

                    <Text className="mx-auto mt-5 max-w-3xl text-lg leading-8">

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

                        , I can help build scalable automation platforms,
                        improve engineering quality, and accelerate reliable
                        software delivery across enterprise systems.

                    </Text>

                    <div className="mt-10">
                        <ContactCard />
                    </div>

                </div>

            </Container>
        </Section>
    );
};

export default Contact;