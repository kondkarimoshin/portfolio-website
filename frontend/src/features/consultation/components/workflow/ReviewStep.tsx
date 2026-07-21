import Button from "../../../../components/ui/Button";
import Text from "../../../../components/ui/Text";

import { consultationService } from "../../services/consultationService";

import type { ConsultationFormData } from "../../types/consultation.types";


interface ReviewStepProps {
  formData: ConsultationFormData;

  isSubmitting: boolean;

  onPrevious: () => void;
  onSubmit: () => void;
}

const ReviewStep = ({
  formData,
  isSubmitting,
  onPrevious,
  onSubmit,
}: ReviewStepProps) => {
  const selectedTopics = formData.topics
    .map(id => consultationService.getTopicById(id))
    .filter(Boolean);

  return (
    <div className="space-y-6">

      <div className="rounded-xl border border-slate-700 bg-slate-900">

        <div className="border-b border-slate-700 px-6 py-4">
          <Text className="text-lg font-semibold">
            Review Your Consultation
          </Text>
        </div>

        <div className="space-y-5 p-6">

          <ReviewItem
            label="Email"
            value={formData.email}
          />

          <ReviewItem
            label="First Name"
            value={formData.firstName}
          />

          <ReviewItem
            label="Last Name"
            value={formData.lastName}
          />

          <ReviewItem
            label="Phone"
            value={formData.phone}
          />

          <ReviewItem
            label="Category"
            value={formData.category}
          />

          <ReviewItem
            label="Topics"
            value={
              selectedTopics
                .map(topic => topic!.title)
                .join(", ")
            }
          />

          <ReviewItem
            label="Additional Details"
            value={
              formData.additionalDetails || "Not Provided"
            }
          />

        </div>

      </div>

      <div className="flex justify-between">

        <Button
          variant="secondary"
          onClick={onPrevious}
        >
          Previous
        </Button>

        <Button
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Submitting..."
            : "Submit Consultation"}
        </Button>

      </div>

    </div>
  );
};

interface ReviewItemProps {
  label: string;
  value: string;
}

const ReviewItem = ({
  label,
  value,
}: ReviewItemProps) => (
  <div className="flex justify-between border-b border-slate-800 pb-3">

    <Text className="font-medium text-slate-400">
      {label}
    </Text>

    <Text className="text-right">
      {value}
    </Text>

  </div>
);

export default ReviewStep;