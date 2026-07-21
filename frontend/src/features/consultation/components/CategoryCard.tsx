import Text from "../../../components/ui/Text";

import type { ConsultationCategoryOption } from "../constants/consultationCategories";

interface CategoryCardProps {
  category: ConsultationCategoryOption;
  selected: boolean;
  onSelect: (id: ConsultationCategoryOption["id"]) => void;
}

const CategoryCard = ({
  category,
  selected,
  onSelect,
}: CategoryCardProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(category.id)}
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

        <span className="text-3xl">
          {category.icon}
        </span>

        <div>

          <Text className="text-lg font-semibold">
            {category.title}
          </Text>

          <Text className="mt-2 text-sm text-slate-400">
            {category.description}
          </Text>

        </div>

      </div>

    </button>
  );
};

export default CategoryCard;