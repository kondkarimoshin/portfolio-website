import {
    FiAward,
    FiGlobe,
    FiLayers,
    FiUsers,
    FiTrendingUp,
} from "react-icons/fi";

const highlights = [
    {
        icon: FiAward,
        title: "16+ Years Experience",
    },
    {
        icon: FiTrendingUp,
        title: "Capital Markets",
    },
    {
        icon: FiLayers,
        title: "Enterprise Automation",
    },
    {
        icon: FiUsers,
        title: "Team Leadership",
    },
    {
        icon: FiGlobe,
        title: "Cloud Native Testing",
    },
];

const HeroHighlights = () => {
    return (
        <div
            className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/40
        p-6
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400/70
        hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
    "
        >

            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Quick Highlights
            </h3>

            <div className="space-y-4">

                {highlights.map(({ icon: Icon, title }) => (

                    <div
                        key={title}
                        className="group flex items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-slate-800/50"
                    >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:scale-105">
                            <Icon size={20} />
                        </div>

                        <span className="flex h-10 items-center text-base font-medium text-slate-200 transition-colors duration-300 group-hover:text-cyan-400">
                            {title}
                        </span>
                    </div>

                ))}

            </div>

        </div>
    );
};

export default HeroHighlights;