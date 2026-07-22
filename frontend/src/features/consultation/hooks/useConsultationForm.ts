import { useMemo, useState } from "react";

import { consultationInitialValues } from "../constants/consultationInitialValues";
import { consultationSteps } from "../constants/consultationSteps";
import { consultationService } from "../services/consultationService";

import type {
  ConsultationFormData,
  ConsultationRequest,
  PersonalInformationErrors,
} from "../types/consultation.types";

const useConsultationForm = () => {
  const [currentStep, setCurrentStep] =
    useState(1);

  const [formData, setFormData] =
    useState<ConsultationFormData>(
      consultationInitialValues
    );

  const [personalInformationErrors, setPersonalInformationErrors] =
    useState<PersonalInformationErrors>({});

  const [
    existingConsultation,
    setExistingConsultation,
  ] = useState<ConsultationRequest | null>(
    null
  );

  const isEditing =
    existingConsultation !== null;

  const totalSteps =
    consultationSteps.length;

  const currentStepDetails = useMemo(
    () =>
      consultationSteps.find(
        (step) => step.id === currentStep
      ),
    [currentStep]
  );

  const updateFormData = (
    values: Partial<ConsultationFormData>
  ) => {
    setFormData((previous) => ({
      ...previous,
      ...values,
    }));

    setPersonalInformationErrors((previous) => ({
      ...previous,
      ...(values.firstName !== undefined && {
        firstName: undefined,
      }),
      ...(values.lastName !== undefined && {
        lastName: undefined,
      }),
      ...(values.phone !== undefined && {
        phone: undefined,
      }),
    }));
  };

  const validatePersonalInformation = (): boolean => {
    const errors: PersonalInformationErrors = {};

    const firstName =
      formData.firstName.trim();

    const lastName =
      formData.lastName.trim();

    const phone =
      formData.phone.trim();

    if (!firstName) {
      errors.firstName =
        "First Name is required.";
    } else if (firstName.length < 3) {
      errors.firstName =
        "First Name must be at least 3 characters.";
    } else if (
      !/^[A-Za-z\s'-]+$/.test(firstName)
    ) {
      errors.firstName =
        "First Name can contain letters only.";
    }

    if (
      lastName &&
      !/^[A-Za-z\s'-]+$/.test(lastName)
    ) {
      errors.lastName =
        "Last Name can contain letters only.";
    }

    if (
      phone &&
      !/^\+?[1-9]\d{7,14}$/.test(
        phone.replace(/\s+/g, "")
      )
    ) {
      errors.phone =
        "Please enter a valid international phone number.";
    }

    setPersonalInformationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const canProceedToNextStep = (): boolean => {
    switch (currentStep) {
      case 1:
        return true;

      case 2:
        return validatePersonalInformation();

      case 3:
        return true;

      case 4:
        return true;

      case 5:
        return true;

      default:
        return true;
    }
  };


  const nextStep = () => {
    if (!canProceedToNextStep()) {
      return;
    }

    if (currentStep === 1) {
      if (!existingConsultation) {
        const consultation =
          consultationService.findActiveByEmail(
            formData.email
          );

        if (consultation) {
          setExistingConsultation(
            consultation
          );

          setFormData({
            email: consultation.email,
            firstName:
              consultation.firstName,
            lastName:
              consultation.lastName,
            phone: consultation.phone,
            consultationServices:
              consultation.consultationServices,
            additionalDetails:
              consultation.additionalDetails ??
              "",
          });

          return;
        }
      } else {
        setCurrentStep(2);
        return;
      }
    }

    setCurrentStep((previous) =>
      Math.min(
        previous + 1,
        totalSteps
      )
    );
  };

  const previousStep = () => {
    setCurrentStep((previous) =>
      Math.max(previous - 1, 1)
    );
  };

  const goToStep = (
    step: number
  ) => {
    if (
      step >= 1 &&
      step <= totalSteps
    ) {
      setCurrentStep(step);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData(
      consultationInitialValues
    );
    setPersonalInformationErrors({});
    setExistingConsultation(null);
  };

  return {
    currentStep,
    totalSteps,
    currentStepDetails,

    formData,
    updateFormData,

    personalInformationErrors,

    existingConsultation,
    isEditing,

    nextStep,
    previousStep,
    goToStep,

    resetForm,
  };
};

export default useConsultationForm;