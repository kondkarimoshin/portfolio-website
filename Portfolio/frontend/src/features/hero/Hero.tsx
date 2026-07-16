import profile from "../../assets/images/profile.jpg";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";
import Text from "../../components/ui/Text";
import Badge from "../../components/ui/Badge";
import Stat from "../../components/ui/Stat";

const Hero = () => {
    return (
        <Section className="pt-8 lg:pt-16">
            <Container>
                <div className="flex min-h-[80vh] flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:justify-center lg:gap-10">
                    {/* Left Side */}
                    <div className="max-w-2xl text-center lg:text-left">

                        <Badge className="mb-5">
                            Hello, I'm
                        </Badge>

                        <Heading>
                            Moshin
                            <br />
                            Kondkari
                        </Heading>

                        <h2 className="mt-4 text-xl font-semibold text-slate-300 sm:text-2xl lg:text-3xl">
                            Senior Automation Engineer
                        </h2>

                        <Text className="mt-5 max-w-xl text-base lg:text-lg">
                            Building scalable automation solutions for mission-critical
                            Capital Market and Trading platforms using Java,
                            Microservices and Cloud technologies.
                        </Text>

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
                                    Contact Me
                                </Button>
                            </a>

                        </div>

                        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">

                            <Stat
                                value="15+"
                                label="Years Experience"
                            />

                            <Stat
                                value="5000+"
                                label="Automation Tests"
                            />

                            <Stat
                                value="Equities"
                                label="Trading Domain"
                            />

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="mb-6 flex justify-center lg:mb-0">

                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-30 blur-3xl"></div>

                            <div className="absolute -inset-2 rounded-full border border-blue-400/30"></div>
                            <img
                                src={profile}
                                alt="Moshin Kondkari"
                                className="relative h-48 w-48 rounded-full border-4 border-blue-500 object-cover shadow-2xl transition-all duration-500 hover:scale-105 sm:h-64 sm:w-64 lg:h-80 lg:w-80"
                            />
                        </div>

                    </div>

                </div>
            </Container>
        </Section>
    );
};

export default Hero;