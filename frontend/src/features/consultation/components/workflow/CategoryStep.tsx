import Button from "../../../../components/ui/Button";
import Text from "../../../../components/ui/Text";

import CategoryCard from "../CategoryCard";

import { consultationCategories } from "../../constants/consultationCategories";

import type {
  ConsultationCategory,
  ConsultationServiceSelection,
} from "../../types/consultation.types";

interface CategoryStepProps {
  consultationServices: ConsultationServiceSelection[];

  onChange: (
    consultationServices: ConsultationServiceSelection[]
  ) => void;

  onPrevious: () => void;
  onContinue: () => void;
}

const CategoryStep = ({
  consultationServices,
  onChange,
  onPrevious,
  onContinue,
}: CategoryStepProps) => {
  const toggleCategory = (
    category: ConsultationCategory
  ) => {
    const exists =
      consultationServices.find(
        (service) =>
          service.category === category
      );

    if (exists) {
      onChange(
        consultationServices.filter(
          (service) =>
            service.category !== category
        )
      );

      return;
    }

    onChange([
      ...consultationServices,
      {
        category,
        topics: [],
      },
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
        <Text className="font-medium text-cyan-300">
          Select one or more consultation services.
        </Text>

        <Text className="mt-1 text-sm text-slate-400">
          You can choose multiple services if you need help in different
          areas. In the next step, you'll select the topics for each
          service.
        </Text>
      </div>

      <div className="space-y-4">
        {consultationCategories.map((item) => (
          <CategoryCard
            key={item.id}
            category={item}
            selected={consultationServices.some(
              (service) =>
                service.category === item.id
            )}
            onSelect={toggleCategory}
          />
        ))}
      </div>

      <div className="flex justify-between">
        <Button
          variant="secondary"
          onClick={onPrevious}
        >
          Previous
        </Button>

        <Button
          onClick={onContinue}
          disabled={
            consultationServices.length === 0
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default CategoryStep;