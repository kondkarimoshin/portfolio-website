interface StatProps {
  value: string;
  label: string;
}

const Stat = ({ value, label }: StatProps) => {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 px-5 py-4 text-center transition-all duration-200 hover:border-slate-700">
      <h3 className="text-2xl font-bold text-blue-400">
        {value}
      </h3>

      <p className="mt-1 text-xs sm:text-sm text-slate-400">
        {label}
      </p>
    </div>
  );
};

export default Stat;