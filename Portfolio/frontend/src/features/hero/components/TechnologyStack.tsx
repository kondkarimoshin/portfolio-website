import { technologies } from "../constants/technologies";

const TechnologyStack = () => {
    return (
        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {technologies.map(({ icon: Icon, label }) => (
                <div
                    key={label}
                    className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800/70"
                >
                    {Icon && (
                        <Icon
                            className="text-cyan-400"
                            size={16}
                        />
                    )}

                    <span>{label}</span>
                </div>
            ))}
        </div>
    );
};

export default TechnologyStack;