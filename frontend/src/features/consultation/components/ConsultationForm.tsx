import { useEffect, useRef } from "react";

import Text from "../../../components/ui/Text";

import ConsultationProgress from "./ConsultationProgress";
import ConsultationStepSwitcher from "./ConsultationStepSwitcher";
import SuccessStep from "./workflow/SuccessStep";

import useConsultationForm from "../hooks/useConsultationForm";
import useConsultationSubmission from "../hooks/useConsultationSubmission";

const containerClass =
  "w-full rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-lg";

const ConsultationForm = () => {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const {
    currentStep,
    formData,
    updateFormData,

    personalInformationErrors,

    existingConsultation,
    isEditing,

    nextStep,
    previousStep,
    cancelEditing,
    resetForm,
  } = useConsultationForm();

  const {
    submit,
    submissionState,
    consultationId,
    error,
    reset,
  } = useConsultationSubmission();

  useEffect(() => {
    if (
      submissionState === "error" &&
      error
    ) {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [submissionState, error]);

  const handleSubmit = async (): Promise<void> => {
    await submit(
      formData,
      existingConsultation
    );
  };

  if (submissionState === "success") {
    return (
      <div className={containerClass}>
        <SuccessStep
          consultationId={consultationId}
          isEditing={isEditing}
          onFinish={() => {
            reset();
            resetForm();
          }}
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={containerClass}
    >
      <ConsultationProgress
        currentStep={currentStep}
      />

      {submissionState === "error" && error && (
        <div className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
          <Text className="text-red-300">
            {error}
          </Text>
        </div>
      )}

      <div className="mt-6">
        <ConsultationStepSwitcher
          currentStep={currentStep}
          formData={formData}
          personalInformationErrors={
            personalInformationErrors
          }
          updateFormData={updateFormData}
          existingConsultation={existingConsultation}
          isEditing={isEditing}
          nextStep={nextStep}
          previousStep={previousStep}
          onCancel={cancelEditing}
          submissionState={submissionState}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ConsultationForm;