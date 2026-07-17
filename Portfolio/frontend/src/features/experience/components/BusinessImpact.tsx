import type { BusinessImpact as BusinessImpactType } from "../types/experience";

interface BusinessImpactProps {
    impacts: BusinessImpactType[];
}

const BusinessImpact = ({ impacts }: BusinessImpactProps) => {
    return (
        <div className="mt-5 grid gap-4 md:grid-cols-2">

            {impacts.map((impact) => (

                <div
                    key={impact.title}
                    className="rounded-xl border border-slate-800 bg-slate-900/30 p-5"
                >

                    <h5 className="font-semibold text-white">
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