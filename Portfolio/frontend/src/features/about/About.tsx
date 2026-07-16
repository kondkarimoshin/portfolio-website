import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/Section";
import Text from "../../components/ui/Text";
import Badge from "../../components/ui/Badge";

const About = () => {
    return (
        <Section id="about"
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

                <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">

                    {/* Left Side */}

                    <div>

                        <Text className="text-lg leading-8 text-slate-300">
                            I'm a <span className="font-semibold text-white">Senior Automation Engineer </span>
                            with over <span className="font-semibold text-blue-400">15 years of experience </span>
                            designing scalable automation frameworks for enterprise applications,
                            Capital Markets, and Equities Trading platforms.
                            <br />
                            <br />
                            My expertise spans Java, Selenium, Cucumber, Microservices,
                            FIX Protocol, OpenShift, Docker, CI/CD pipelines, and cloud-native
                            automation, with a strong focus on delivering reliable,
                            high-performance testing solutions.
                        </Text>

                        <div className="mt-8 flex flex-wrap gap-3">

                            <Badge>Java</Badge>

                            <Badge>Selenium</Badge>

                            <Badge>Cucumber</Badge>

                            <Badge>Spring Boot</Badge>

                            <Badge>Microservices</Badge>

                            <Badge>FIX Protocol</Badge>

                            <Badge>Docker</Badge>

                            <Badge>OpenShift</Badge>

                            <Badge>Jenkins</Badge>

                            <Badge>SQL</Badge>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="space-y-5">

                        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:border-blue-500/40">
                            <h3 className="text-lg font-semibold text-white">
                                ✔ 15+ Years Experience
                            </h3>

                            <p className="mt-2 text-slate-400">
                                Building enterprise automation frameworks across multiple domains.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:border-blue-500/40">
                            <h3 className="text-lg font-semibold text-white">
                                ✔ Capital Markets
                            </h3>

                            <p className="mt-2 text-slate-400">
                                Extensive experience in Equities Trading, FIX Protocol and Order Management.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:border-blue-500/40">
                            <h3 className="text-lg font-semibold text-white">
                                ✔ Enterprise Automation
                            </h3>

                            <p className="mt-2 text-slate-400">
                                Designing scalable automation frameworks for microservices and distributed systems.
                            </p>
                        </div>

                    </div>

                </div>


            </Container>

        </Section>
    );
};

export default About;