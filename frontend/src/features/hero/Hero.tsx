import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";
import Text from "../../components/ui/Text";
import Badge from "../../components/ui/Badge";
import FadeIn from "../../components/animations/FadeIn";
import TechnologyStack from "./components/TechnologyStack";
import HeroHighlights from "./components/HeroHighlights";
import { FiDownload, FiMessageSquare } from "react-icons/fi";

const Hero = () => {
    return (
        <Section
            id="hero"
            variant="hero"
        >
            <Container>
                <FadeIn>
                    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center">

                        <Badge className="mb-4 w-fit self-center text-cyan-400 lg:self-start">
                            16+ Years of Automation Excellence
                        </Badge>

                        <div className="grid items-start gap-20 lg:grid-cols-[minmax(0,1fr)_320px]">

                            {/* Left */}

                            <div>

                                <Heading className="text-center lg:text-left">
                                    Moshin Kondkari
                                </Heading>

                                <h2 className="mt-4 text-center text-xl font-semibold text-slate-300 lg:text-left lg:text-2xl">
                                    Senior Automation Engineer
                                </h2>

                                <Text className="mx-auto mt-6 max-w-1xl text-center lg:mx-0 lg:text-justify">
                                    With over 16 years of experience in software quality engineering, I specialize in designing scalable automation solutions for complex enterprise applications. My career has been built around delivering reliable, high-quality platforms in the Banking and Capital Markets domain, where performance, stability, and precision are critical.

                                    Beyond writing automation, I enjoy solving engineering problems, mentoring teams, improving development workflows, and driving quality throughout the software delivery lifecycle. I believe great automation is not just about increasing test coverage—it is about enabling teams to deliver software faster, with greater confidence.
                                </Text>

                                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:items-start lg:justify-start">

                                    <a
                                        href="/moshin-kondkari-resume.pdf"
                                        download
                                    >
                                        <Button>
                                            <FiDownload size={18} />
                                            <span>Download Resume</span>
                                        </Button>
                                    </a>

                                    <a href="#contact">
                                        <Button variant="outline">
                                            <FiMessageSquare size={18} />
                                            <span>Let's Connect</span>
                                        </Button>
                                    </a>

                                </div>

                            </div>

                            {/* Right */}

                            <div className="self-start lg:-mt-12">
                                <HeroHighlights />
                            </div>

                        </div>

                        <TechnologyStack />

                    </div>
                </FadeIn>
            </Container>
        </Section>
    );
};

export default Hero;