interface BenefitChipProps {
    children: React.ReactNode;
}

const BenefitChip = ({ children }: BenefitChipProps) => {
    return (
        <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20">
            <span
                aria-hidden="true"
                className="mr-2 h-2 w-2 rounded-full bg-cyan-400"
            />
            {children}
        </span>
    );
};

export default BenefitChip;