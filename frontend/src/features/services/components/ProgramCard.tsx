import type { Program } from "../types/services.types";

interface Props {
  program: Program;
}

const ProgramCard = ({ program }: Props) => {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/40
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400
        hover:bg-slate-900/70
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">{program.icon}</span>

        <h3 className="text-xl font-semibold text-white">
          {program.title}
        </h3>
      </div>

      <div className="my-5 h-px bg-slate-800 group-hover:bg-cyan-500/40 transition-colors" />

      {/* Highlights */}
      <ul className="space-y-3">
        {program.highlights.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-slate-300"
          >
            <span className="font-semibold text-cyan-400">✓</span>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramCard;