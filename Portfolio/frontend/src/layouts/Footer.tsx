import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="border-t border-slate-800 bg-slate-950">

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row">

                <div>

                    <p className="font-medium text-slate-300">
                        © {new Date().getFullYear()} Moshin Kondkari
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                        Designed & Built by Moshin Kondkari using React, TypeScript & Tailwind CSS
                    </p>

                </div>

                <div className="flex items-center gap-5">

                    <a
                        href="https://www.linkedin.com/in/moshin-kondkari-79282258/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 transition hover:text-cyan-400"
                    >
                        <FaLinkedin className="h-6 w-6" />
                    </a>

                    <a
                        href="https://github.com/kondkarimoshin"
                        target="_blank"
                        rel="noopener noreferrer"
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