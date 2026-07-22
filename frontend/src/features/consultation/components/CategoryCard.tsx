import Text from "../../../components/ui/Text";

import type { ConsultationCategoryOption } from "../constants/consultationCategories";

interface CategoryCardProps {
  category: ConsultationCategoryOption;
  selected: boolean;
  onSelect: (
    id: ConsultationCategoryOption["id"]
  ) => void;
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

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Text className="text-lg font-semibold">
                {category.title}
              </Text>

              <Text className="mt-2 text-sm text-slate-400">
                {category.description}
              </Text>
            </div>

            <div
              className={`
                flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-all
                ${
                  selected
                    ? "border-cyan-400 bg-cyan-500 text-slate-950"
                    : "border-slate-500 bg-transparent"
                }
              `}
            >
              {selected && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.493-6.493a1 1 0 011.415 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Text className="text-xs uppercase tracking-wide text-slate-500">
              Click to{" "}
              {selected
                ? "remove"
                : "select"}
            </Text>

            {selected && (
              <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                Selected
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
};

export default CategoryCard;