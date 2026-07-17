import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";
import Text from "../../components/ui/Text";
import Badge from "../../components/ui/Badge";
import FadeIn from "../../components/ui/FadeIn";
import TechnologyStack from "./components/TechnologyStack";
import ExpertiseChips from "./components/ExpertiseChips";

const Hero = () => {
    return (
        <Section
            id="hero"
            className="pt-6 lg:pt-16"
        >
            <Container>

                <FadeIn>

                    <div className="mx-auto flex min-h-[60vh] max-w-5xl flex-col justify-center">

                        <Badge className="mb-4 w-fit self-center lg:self-start">
                            16+ Years of Automation Excellence
                        </Badge>

                        <Heading className="text-center lg:text-left">
                            Moshin Kondkari
                        </Heading>

                        <h2 className="mt-4 text-center text-xl font-semibold text-slate-300 lg:text-left lg:text-3xl">
                            Senior Automation Engineer
                        </h2>

                        <ExpertiseChips />

                        <Text className="mx-auto mt-8 max-w-3xl text-center lg:mx-0 lg:text-left">
                            Building scalable automation frameworks and quality
                            engineering solutions for mission-critical financial
                            platforms using Java, Microservices, Cloud technologies,
                            and modern DevOps practices.
                        </Text>

                        <TechnologyStack />

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

                            <a
                                href="/Moshin-Kondkari.pdf"
                                download
                            >
                                <Button>
                                    Download Resume
                                </Button>
                            </a>

                            <a href="#contact">
                                <Button variant="secondary">
                                    Connect with Me
                                </Button>
                            </a>

                        </div>

                    </div>

                </FadeIn>

            </Container>
        </Section>
    );
};

export default Hero;