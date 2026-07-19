interface StatProps {
    value: string;
    label: string;
}

const Stat = ({ value, label }: StatProps) => {
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 px-6 py-5 text-center">
            <h3 className="text-3xl font-bold text-blue-400">
                {value}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
                {label}
            </p>
        </div>
    );
};

export default Stat;