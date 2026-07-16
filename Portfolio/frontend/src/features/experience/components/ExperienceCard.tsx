
import Text from "../../../components/ui/Text";
import BusinessImpact from "./BusinessImpact";
import Responsibilities from "./Responsibilities";
import KeyProjects from "./KeyProjects";
import TechnologyStack from "./TechnologyStack";


const ExperienceCard = () => {
    return (
        <>
            <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition-all duration-300 hover:border-blue-500/40">

                {/* Header */}

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                    {/* Company Details */}

                    <div>

                        <h3 className="text-2xl font-bold text-white">
                            Citibank
                        </h3>

                        <p className="mt-2 text-lg font-medium text-blue-400">
                            Senior Automation Engineer
                        </p>

                        <p className="mt-3 text-slate-400">
                            Pune, Maharashtra • India
                        </p>

                    </div>

                    {/* Duration */}

                    <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">

                        Dec 2016 — Present

                    </div>

                </div>

                {/* Divider */}

                <div className="my-8 border-t border-slate-800"></div>

                {/* ============================== */}
                {/* Domain */}
                {/* ============================== */}

                <div>

                    <h4 className="text-lg font-semibold text-white">
                        Domain
                    </h4>

                    <p className="mt-3 leading-8 text-slate-400">
                        Capital Markets • Equities Trading • Smart Order Routing •
                        FIX Protocol • Enterprise Automation • Microservices
                    </p>

                </div>

                {/* ============================== */}
                {/* Professional Summary */}
                {/* ============================== */}

                <div className="mt-10">

                    <h4 className="text-lg font-semibold text-white">
                        Professional Summary
                    </h4>

                    <Text className="mt-4 leading-8">
                        Leading automation initiatives for enterprise-grade Capital Markets
                        and Equities Trading platforms, designing scalable automation
                        frameworks, backend testing solutions, and cloud-native test
                        infrastructure supporting global business operations across
                        APAC and EMEA regions.
                    </Text>

                </div>

                {/* ============================== */}
                {/* Key Responsibilities */}
                {/* ============================== */}

                <div className="mt-10">

                    <h4 className="text-lg font-semibold text-white">
                        Key Responsibilities
                    </h4>

                    <Responsibilities />

                </div>

                {/* ============================== */}
                {/* Business Impact */}
                {/* ============================== */}

                <div className="mt-10">

                    <h4 className="text-lg font-semibold text-white">
                        Business Impact
                    </h4>

                    <BusinessImpact />

                </div>

                {/* ============================== */}
                {/* Key Projects */}
                {/* ============================== */}

                <div className="mt-10">

                    <h4 className="text-lg font-semibold text-white">
                        Key Projects
                    </h4>

                    <KeyProjects />

                </div>

                {/* ============================== */}
                {/* Technology Stack */}
                {/* ============================== */}

                <div className="mt-8">

                    <h4 className="text-lg font-semibold text-white">
                        Technologies
                    </h4>

                    <TechnologyStack />

                </div>

            </div>
        </>
    );
};

export default ExperienceCard;