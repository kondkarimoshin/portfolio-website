type Expertise = {
    label: string;
};

const expertise: Expertise[] = [
    { label: "Enterprise Automation" },
    { label: "Capital Markets" },
    { label: "Cloud Native Testing" },
    { label: "Team Leader" },
];

const ExpertiseChips = () => {
    return (
        <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            {expertise.map(({ label }) => (
                <span
                    key={label}
                    className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800/70"
                >
                    {label}
                </span>
            ))}
        </div>
    );
};

export default ExpertiseChips;