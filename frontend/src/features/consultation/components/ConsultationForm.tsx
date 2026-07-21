import Text from "../../../components/ui/Text";

import ConsultationProgress from "./ConsultationProgress";
import ConsultationStepSwitcher from "./ConsultationStepSwitcher";
import SuccessStep from "./workflow/SuccessStep";

import useConsultationForm from "../hooks/useConsultationForm";
import useConsultationSubmission from "../hooks/useConsultationSubmission";

const ConsultationForm = () => {
  const {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    previousStep,
    resetForm,
  } = useConsultationForm();

  const {
    submit,
    submissionState,
    consultationId,
    error,
    reset,
  } = useConsultationSubmission();

  const handleSubmit = async (): Promise<void> => {
    await submit(formData);
  };

  if (submissionState === "success") {
    return (
      <div className="w-full rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-lg">
        <SuccessStep
          consultationId={consultationId}
          onFinish={() => {
            reset();
            resetForm();
          }}
        />
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-lg">

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
          updateFormData={updateFormData}
          nextStep={nextStep}
          previousStep={previousStep}
          submissionState={submissionState}
          onSubmit={handleSubmit}
        />

      </div>

    </div>
  );
};

export default ConsultationForm;