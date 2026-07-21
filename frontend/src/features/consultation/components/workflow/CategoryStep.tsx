import Button from "../../../../components/ui/Button";

import CategoryCard from "../CategoryCard";

import { consultationCategories } from "../../constants/consultationCategories";
import type {
  ConsultationCategory,
  SelectedConsultationCategory,
} from "../../types/consultation.types";

interface CategoryStepProps {
  category: SelectedConsultationCategory;

  onChange: (category: ConsultationCategory) => void;

  onPrevious: () => void;
  onContinue: () => void;
}

const CategoryStep = ({
  category,
  onChange,
  onPrevious,
  onContinue,
}: CategoryStepProps) => {
  return (
    <div className="space-y-6">

      <div className="space-y-4">

        {consultationCategories.map((item) => (
          <CategoryCard
            key={item.id}
            category={item}
            selected={category === item.id}
            onSelect={onChange}
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
          disabled={!category}
        >
          Next
        </Button>

      </div>

    </div>
  );
};

export default CategoryStep;