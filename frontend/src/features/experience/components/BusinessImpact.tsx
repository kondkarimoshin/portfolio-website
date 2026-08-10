import type { BusinessImpact as BusinessImpactType } from "../types/experience.types";

interface BusinessImpactProps {
    impacts: BusinessImpactType[];
}

const BusinessImpact = ({ impacts }: BusinessImpactProps) => {
    return (
        <div className="mt-5 grid gap-4 md:grid-cols-2">

            {impacts.map((impact) => (

                <div
                    key={impact.title}
                    className="
group
rounded-xl
border
border-slate-800
bg-slate-900/30
p-5
transition-all
duration-300
ease-out
hover:-translate-y-1
hover:border-cyan-400
hover:shadow-[0_8px_30px_rgba(34,211,238,0.10)]
"
                >

                    <h5 className="font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                        {impact.title}
                    </h5>

                    <p className="mt-2 text-slate-400">
                        {impact.description}
                    </p>

                </div>

            ))}

        </div>
    );
};

export default BusinessImpact;