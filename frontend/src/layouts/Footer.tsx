import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="border-t border-slate-800 bg-slate-950">

            <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-5 text-center md:flex-row md:justify-between">

                {/* Left */}

                <div className="md:w-1/3 md:text-left">
                    <p className="text-sm text-slate-300">
                        © {new Date().getFullYear()} Moshin Kondkari
                    </p>
                </div>

                {/* Center */}

                <div className="md:w-1/2 md:text-center">
                    <p className="text-[15px] font-semibold text-white">
                        Enterprise Automation Architect & Career Mentorship Coach
                    </p>
                </div>

                {/* Right */}

                <div className="flex items-center gap-5 md:w-1/3 md:justify-end">

                    <a
                        href="https://www.linkedin.com/in/moshin-kondkari-79282258/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-slate-400 transition hover:text-cyan-400"
                    >
                        <FaLinkedin className="h-6 w-6" />
                    </a>

                    <a
                        href="https://github.com/kondkarimoshin"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-slate-400 transition hover:text-cyan-400"
                    >
                        <FaGithub className="h-6 w-6" />
                    </a>

                </div>

            </div>

        </footer>
    );
};

export default Footer;