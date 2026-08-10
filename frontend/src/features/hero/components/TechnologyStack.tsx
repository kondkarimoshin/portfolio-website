import { TECHNOLOGIES } from "../constants/technology.data";

const TechnologyStack = () => {
    return (
        <div className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {TECHNOLOGIES.map(({ icon: Icon, label }) => (
                <div
                    key={label}
                    className="
group
flex
items-center
gap-2
rounded-lg
border
border-slate-700
bg-slate-900/50
px-3
py-1.5
text-xs
font-medium
text-slate-300
transition-all
duration-300
ease-out
hover:-translate-y-1
hover:border-cyan-400/50
hover:bg-slate-900/70
hover:shadow-[0_8px_20px_rgba(34,211,238,0.08)]
"
                >
                    {Icon && (
                        <Icon
                            className="text-cyan-400"
                            size={14}
                        />
                    )}

                    <span>{label}</span>
                </div>
            ))}
        </div>
    );
};

export default TechnologyStack;