import { useMemo, useState } from "react";

import { consultationSteps } from "../constants/consultationSteps";
import { consultationInitialValues } from "../constants/consultationInitialValues";

import type { ConsultationFormData } from "../types/consultation.types";

const useConsultationForm = () => {
  // --------------------------------------------------------------------------
  // Step Management
  // --------------------------------------------------------------------------

  const [currentStep, setCurrentStep] = useState(1);

  // --------------------------------------------------------------------------
  // Form Data
  // --------------------------------------------------------------------------

  const [formData, setFormData] =
    useState<ConsultationFormData>(consultationInitialValues);

  // --------------------------------------------------------------------------
  // Current Step Details
  // --------------------------------------------------------------------------

  const totalSteps = consultationSteps.length;

  const currentStepDetails = useMemo(
    () =>
      consultationSteps.find(
        (step) => step.id === currentStep
      ),
    [currentStep]
  );

  // --------------------------------------------------------------------------
  // Update Form Data
  // --------------------------------------------------------------------------

  const updateFormData = (
    values: Partial<ConsultationFormData>
  ) => {
    setFormData((previous) => ({
      ...previous,
      ...values,
    }));
  };

  // --------------------------------------------------------------------------
  // Navigation
  // --------------------------------------------------------------------------

  const nextStep = () => {
    setCurrentStep((previous) =>
      Math.min(previous + 1, totalSteps)
    );
  };

  const previousStep = () => {
    setCurrentStep((previous) =>
      Math.max(previous - 1, 1)
    );
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  // --------------------------------------------------------------------------
  // Reset Form
  // --------------------------------------------------------------------------

  const resetForm = () => {
    setCurrentStep(1);
    setFormData(consultationInitialValues);
  };

  return {
    currentStep,
    totalSteps,
    currentStepDetails,

    formData,
    updateFormData,

    nextStep,
    previousStep,
    goToStep,

    resetForm,
  };
};

export default useConsultationForm;