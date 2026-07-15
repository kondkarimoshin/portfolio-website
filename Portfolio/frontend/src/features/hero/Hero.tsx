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
        <Section>
            <Container>
                <div className="flex min-h-[calc(100vh-80px)] items-center justify-between">

                    {/* Left Side */}
                    <div className="max-w-2xl">

                        <Badge className="mb-5">
                            Hello, I'm
                        </Badge>

                        <Heading>
                            Moshin
                            <br />
                            Kondkari
                        </Heading>

                        <h2 className="mt-6 text-3xl font-semibold text-slate-300">
                            Senior Automation Engineer
                        </h2>

                        <Text className="mt-6 max-w-xl">
                            Building scalable automation solutions for mission-critical
                            Capital Market and Trading platforms using Java,
                            Microservices and Cloud technologies.
                        </Text>

                        <div className="mt-10 flex gap-5">

                            <Button>
                                Download Resume
                            </Button>

                            <Button variant="secondary">
                                Contact Me
                            </Button>

                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-6">

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

                    <div className="flex justify-center">

                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20"></div>

                            <img
                                src={profile}
                                alt="Moshin Kondkari"
                                className="relative h-96 w-96 rounded-full border-4 border-blue-500 object-cover shadow-2xl"
                            />
                        </div>

                    </div>

                </div>
            </Container>
        </Section>
    );
};

export default Hero;