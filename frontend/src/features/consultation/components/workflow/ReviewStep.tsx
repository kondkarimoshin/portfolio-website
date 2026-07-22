import Button from "../../../../components/ui/Button";
import Text from "../../../../components/ui/Text";

import { consultationService } from "../../services/consultationService";

import type { ConsultationFormData } from "../../types/consultation.types";

interface ReviewStepProps {
  formData: ConsultationFormData;

  isEditing: boolean;
  isSubmitting: boolean;

  onPrevious: () => void;
  onSubmit: () => void;
}

const formatCategory = (
  category: string
): string =>
  category
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

const ReviewStep = ({
  formData,
  isEditing,
  isSubmitting,
  onPrevious,
  onSubmit,
}: ReviewStepProps) => {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-700 bg-slate-900">
        <div className="border-b border-slate-700 px-6 py-4">
          <Text className="text-lg font-semibold">
            {isEditing
              ? "Review Updated Consultation"
              : "Review Your Consultation"}
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

          <div className="border-b border-slate-800 pb-5">
            <Text className="font-medium text-slate-400">
              Consultation Services
            </Text>

            <div className="mt-4 space-y-4">
              {formData.consultationServices.map(
                (service) => {
                  const topics =
                    service.topics
                      .map((id) =>
                        consultationService.getTopicById(
                          id
                        )
                      )
                      .filter(Boolean);

                  return (
                    <div
                      key={service.category}
                      className="rounded-xl border border-slate-700 bg-slate-800/40 p-4"
                    >
                      <Text className="text-base font-semibold text-cyan-300">
                        {formatCategory(
                          service.category
                        )}
                      </Text>

                      <ul className="mt-3 space-y-2">
                        {topics.map((topic) => (
                          <li
                            key={topic!.id}
                            className="flex items-start gap-2"
                          >
                            <span className="mt-1 text-cyan-400">
                              •
                            </span>

                            <Text className="text-sm text-slate-300">
                              {topic!.title}
                            </Text>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <ReviewItem
            label="Additional Details"
            value={
              formData.additionalDetails ||
              "Not Provided"
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
            ? isEditing
              ? "Updating..."
              : "Submitting..."
            : isEditing
            ? "Update Consultation"
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

    <Text className="max-w-md text-right">
      {value}
    </Text>
  </div>
);

export default ReviewStep;