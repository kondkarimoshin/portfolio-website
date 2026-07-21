import EmailStep from "./workflow/EmailStep";
import PersonalInformationStep from "./workflow/PersonalInformationStep";
import CategoryStep from "./workflow/CategoryStep";
import TopicStep from "./workflow/TopicStep";
import AdditionalDetailsStep from "./workflow/AdditionalDetailsStep";
import ReviewStep from "./workflow/ReviewStep";

import type { ConsultationFormData } from "../types/consultation.types";
import type { SubmissionState } from "../types/submission.types";

interface ConsultationStepSwitcherProps {
  currentStep: number;

  formData: ConsultationFormData;

  updateFormData: (
    values: Partial<ConsultationFormData>
  ) => void;

  nextStep: () => void;
  previousStep: () => void;

  submissionState: SubmissionState;

  onSubmit(): Promise<void>;
}

const ConsultationStepSwitcher = ({
  currentStep,
  formData,
  updateFormData,
  nextStep,
  previousStep,
  submissionState,
  onSubmit,
}: ConsultationStepSwitcherProps) => {
  switch (currentStep) {
    case 1:
      return (
        <EmailStep
          email={formData.email}
          onEmailChange={(email) =>
            updateFormData({ email })
          }
          onContinue={nextStep}
        />
      );

    case 2:
      return (
        <PersonalInformationStep
          firstName={formData.firstName}
          lastName={formData.lastName}
          phone={formData.phone}
          onChange={updateFormData}
          onPrevious={previousStep}
          onContinue={nextStep}
        />
      );

    case 3:
      return (
        <CategoryStep
          category={formData.category}
          onChange={(category) =>
            updateFormData({ category })
          }
          onPrevious={previousStep}
          onContinue={nextStep}
        />
      );

    case 4:
      return (
        <TopicStep
          category={formData.category}
          topics={formData.topics}
          onChange={(topics) =>
            updateFormData({ topics })
          }
          onPrevious={previousStep}
          onContinue={nextStep}
        />
      );

    case 5:
      return (
        <AdditionalDetailsStep
          additionalDetails={formData.additionalDetails}
          onChange={(additionalDetails) =>
            updateFormData({ additionalDetails })
          }
          onPrevious={previousStep}
          onContinue={nextStep}
        />
      );

    case 6:
      return (
        <ReviewStep
          formData={formData}
          isSubmitting={submissionState === "submitting"}
          onPrevious={previousStep}
          onSubmit={onSubmit}
        />
      );

    default:
      return null;
  }
};

export default ConsultationStepSwitcher;