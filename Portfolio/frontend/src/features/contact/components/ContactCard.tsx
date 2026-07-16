import {
    HiEnvelope,
    HiMapPin,
    HiArrowDownTray,
    HiPhone,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Text from "../../../components/ui/Text";

const ContactCard = () => {
    return (
        <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">

            {/* Availability */}

            <div className="mb-8 flex justify-center">

                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-400">
                    🟢 Available for New Opportunities
                </span>

            </div>

            {/* Contact Grid */}

            <div className="grid gap-5 lg:grid-cols-3">

                {/* Email */}

                <a
                    href="mailto:kondkarimoshin@gmail.com"
                    className="flex min-h-[170px] flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/30 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/50 hover:shadow-lg hover:shadow-cyan-400/10"
                >

                    <HiEnvelope className="mb-3 h-8 w-8 text-cyan-400" />

                    <div className="flex flex-col">

                        <p className="text-sm font-medium text-slate-500">
                            Email
                        </p>

                        <p className="mt-1 text-base font-semibold text-white">
                            kondkarimoshin@gmail.com
                        </p>

                    </div>

                </a>

                {/* Phone */}
                <a
                    href="tel:+919029326353"
                    className="flex min-h-[170px] flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/30 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/50 hover:shadow-lg hover:shadow-cyan-400/10"
                >

                    <HiPhone className="mb-3 h-8 w-8 text-cyan-400" />

                    <div className="flex flex-col">

                        <p className="text-sm font-medium text-slate-500">
                            Phone
                        </p>

                        <p className="mt-1 text-base font-semibold text-white">
                            +91 90293 26353
                        </p>

                    </div>

                </a>

                {/* LinkedIn */}

                <a
                    href="https://www.linkedin.com/in/moshin-kondkari-79282258/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[170px] flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/30 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/50 hover:shadow-lg hover:shadow-cyan-400/10"
                >

                    <FaLinkedin className="mb-3 h-8 w-8 text-cyan-400" />

                    <div>

                        <p className="text-sm font-medium text-slate-500">
                            LinkedIn
                        </p>

                        <p className="mt-1 text-base font-semibold text-white">
                            Connect on LinkedIn
                        </p>

                    </div>

                </a>

                {/* GitHub */}

                <a
                    href="https://github.com/kondkarimoshin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[170px] flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/30 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/50 hover:shadow-lg hover:shadow-cyan-400/10"
                >

                    <FaGithub className="mb-3 h-8 w-8 text-cyan-400" />

                    <div>

                        <p className="text-sm font-medium text-slate-500">
                            GitHub
                        </p>

                        <p className="mt-1 text-base font-semibold text-white">
                            Explore My Code
                        </p>

                    </div>

                </a>

                {/* Location */}

                <div
                    className="flex min-h-[170px] flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/30 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/50 hover:shadow-lg hover:shadow-cyan-400/10"
                >

                    <HiMapPin className="mb-3 h-8 w-8 text-cyan-400" />

                    <div className="flex flex-col">

                        <p className="text-sm font-medium text-slate-500">
                            Location
                        </p>

                        <p className="mt-1 text-base font-semibold text-white">
                            Pune, Maharashtra, India
                        </p>

                    </div>


                </div>

                <a
                    href="/Moshin-Kondkari.pdf"
                    download
                    className="flex min-h-[170px] flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/30 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/50 hover:shadow-lg hover:shadow-cyan-400/10"
                >

                    <HiArrowDownTray className="mb-3 h-8 w-8 text-cyan-400" />

                    <div className="flex flex-col">

                        <p className="text-sm font-medium text-slate-500">
                            Resume
                        </p>

                        <p className="mt-1 text-base font-semibold text-white">
                            Download Resume
                        </p>

                    </div>

                </a>

            </div>

            {/* Resume */}



            <Text className="mx-auto mt-12 max-w-3xl text-center text-lg leading-8 text-slate-250">
                Thank you for taking the time to explore my portfolio. I'm always open to
                meaningful conversations about automation, engineering leadership, capital
                markets, and opportunities to build innovative software solutions.
            </Text>

        </div>
    );
};

export default ContactCard;