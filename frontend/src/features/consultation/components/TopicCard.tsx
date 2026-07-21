import Text from "../../../components/ui/Text";

import type { ConsultationTopic } from "../types/consultation.types";

interface TopicCardProps {
  topic: ConsultationTopic;
  selected: boolean;
  onSelect: () => void;
}

const TopicCard = ({
  topic,
  selected,
  onSelect,
}: TopicCardProps) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        w-full rounded-xl border p-5 text-left transition-all duration-200
        ${
          selected
            ? "border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/10"
            : "border-slate-700 bg-slate-900 hover:border-cyan-400 hover:bg-slate-800"
        }
      `}
    >
      <div className="flex items-start gap-4">

        <div
          className={`
            mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs font-bold
            ${
              selected
                ? "border-cyan-500 bg-cyan-500 text-slate-950"
                : "border-slate-600"
            }
          `}
        >
          {selected ? "✓" : ""}
        </div>

        <div className="flex-1">

          <Text className="text-lg font-semibold">
            {topic.title}
          </Text>

          <Text className="mt-2 text-sm text-slate-400">
            {topic.description}
          </Text>

        </div>

      </div>
    </button>
  );
};

export default TopicCard;