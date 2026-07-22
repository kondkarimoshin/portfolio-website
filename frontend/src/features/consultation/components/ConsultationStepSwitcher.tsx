import { AnimatePresence, motion } from "framer-motion";

import EmailStep from "./workflow/EmailStep";
import PersonalInformationStep from "./workflow/PersonalInformationStep";
import CategoryStep from "./workflow/CategoryStep";
import TopicStep from "./workflow/TopicStep";
import AdditionalDetailsStep from "./workflow/AdditionalDetailsStep";
import ReviewStep from "./workflow/ReviewStep";

import { validateEmail } from "../utils/consultationValidation";

import type {
  ConsultationFormData,
  ConsultationRequest,
  PersonalInformationErrors,
} from "../types/consultation.types";
import type { SubmissionState } from "../types/submission.types";

interface ConsultationStepSwitcherProps {
  currentStep: number;

  formData: ConsultationFormData;

  personalInformationErrors: PersonalInformationErrors;

  existingConsultation: ConsultationRequest | null;
  isEditing: boolean;

  updateFormData: (
    values: Partial<ConsultationFormData>
  ) => void;

  nextStep: () => void;
  previousStep: () => void;

  submissionState: SubmissionState;

  onSubmit(): Promise<void>;
}

const stepAnimation = {
  initial: {
    opacity: 0,
    x: 24,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -24,
  },
};

const ConsultationStepSwitcher = ({
  currentStep,
  formData,
  personalInformationErrors,
  existingConsultation,
  isEditing,
  updateFormData,
  nextStep,
  previousStep,
  submissionState,
  onSubmit,
}: ConsultationStepSwitcherProps) => {
  const emailValidation = validateEmail(formData.email);

  let content: React.ReactNode = null;

  switch (currentStep) {
    case 1:
      content = (
        <EmailStep
          email={formData.email}
          error={emailValidation.error}
          canContinue={emailValidation.valid}
          existingConsultation={existingConsultation}
          onEmailChange={(email) =>
            updateFormData({ email })
          }
          onContinue={nextStep}
        />
      );
      break;

    case 2:
      content = (
        <PersonalInformationStep
          firstName={formData.firstName}
          lastName={formData.lastName}
          phone={formData.phone}
          errors={personalInformationErrors}
          onChange={updateFormData}
          onPrevious={previousStep}
          onContinue={nextStep}
        />
      );
      break;

    case 3:
      content = (
        <CategoryStep
          consultationServices={
            formData.consultationServices
          }
          onChange={(consultationServices) =>
            updateFormData({
              consultationServices,
            })
          }
          onPrevious={previousStep}
          onContinue={nextStep}
        />
      );
      break;

    case 4:
      content = (
        <TopicStep
          consultationServices={
            formData.consultationServices
          }
          onChange={(consultationServices) =>
            updateFormData({
              consultationServices,
            })
          }
          onPrevious={previousStep}
          onContinue={nextStep}
        />
      );
      break;

    case 5:
      content = (
        <AdditionalDetailsStep
          additionalDetails={
            formData.additionalDetails
          }
          onChange={(additionalDetails) =>
            updateFormData({
              additionalDetails,
            })
          }
          onPrevious={previousStep}
          onContinue={nextStep}
        />
      );
      break;

    case 6:
      content = (
        <ReviewStep
          formData={formData}
          isEditing={isEditing}
          isSubmitting={
            submissionState === "submitting"
          }
          onPrevious={previousStep}
          onSubmit={onSubmit}
        />
      );
      break;

    default:
      content = null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        variants={stepAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.18,
          ease: "easeOut",
        }}
      >
        {content}
      </motion.div>
    </AnimatePresence>
  );
};

export default ConsultationStepSwitcher;