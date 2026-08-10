import { ABOUT_HIGHLIGHT } from "../constants/about-highlights.data";

const AboutHighlights = () => {
    return (
        <div className="grid gap-5">

            {ABOUT_HIGHLIGHT.map(({ title, description, icon: Icon }) => (

                <div
                    key={title}
                    className="group rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]"
                >

                    <div className="mb-3 flex items-center gap-3">

                        <div className="rounded-lg bg-cyan-400/10 p-3">
                            <Icon
                                size={20}
                                className="text-cyan-400"
                            />
                        </div>

                        <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                            {title}
                        </h3>

                    </div>

                    <p className="leading-7 text-slate-400">
                        {description}
                    </p>

                </div>

            ))}

        </div>
    );
};

export default AboutHighlights;