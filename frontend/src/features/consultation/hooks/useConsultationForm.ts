import { useState } from "react";

import { consultationInitialValues } from "../constants/consultationInitialValues";
import { consultationSteps } from "../constants/consultationSteps";

import { consultationApi } from "../../../services/api/consultationApi";
import { consultationConfig } from "../../../config/consultationConfig";

import type {
  ConsultationFormData,
  ConsultationRequest,
  PersonalInformationErrors,
} from "../types/consultation.types";

const NAME_REGEX = /^[A-Za-z\s'-]+$/;
const PHONE_REGEX = /^\+?[1-9]\d{7,14}$/;

const useConsultationForm = () => {
  const [currentStep, setCurrentStep] =
    useState(1);

  const [formData, setFormData] =
    useState<ConsultationFormData>(
      consultationInitialValues
    );

  const [
    personalInformationErrors,
    setPersonalInformationErrors,
  ] = useState<PersonalInformationErrors>({});

  const [
    existingConsultation,
    setExistingConsultation,
  ] = useState<ConsultationRequest | null>(null);

  const isEditing =
    existingConsultation !== null;

  const totalSteps =
    consultationSteps.length;

  const currentStepDetails =
    consultationSteps.find(
      (step) => step.id === currentStep
    );

  const updateFormData = (
    values: Partial<ConsultationFormData>
  ) => {
    setFormData((previous) => ({
      ...previous,
      ...values,
    }));

    setPersonalInformationErrors(
      (previous) => ({
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
      })
    );
  };

  const validatePersonalInformation =
    (): boolean => {
      const errors: PersonalInformationErrors =
        {};

      const {
        firstName,
        lastName,
        phone,
      } = formData;

      const trimmedFirstName =
        firstName.trim();

      const trimmedLastName =
        lastName.trim();

      const trimmedPhone =
        phone
          .trim()
          .replace(/\s+/g, "");

      if (!trimmedFirstName) {
        errors.firstName =
          "First Name is required.";
      } else if (
        trimmedFirstName.length < 3
      ) {
        errors.firstName =
          "First Name must be at least 3 characters.";
      } else if (
        !NAME_REGEX.test(
          trimmedFirstName
        )
      ) {
        errors.firstName =
          "First Name can contain letters only.";
      }

      if (
        trimmedLastName &&
        !NAME_REGEX.test(
          trimmedLastName
        )
      ) {
        errors.lastName =
          "Last Name can contain letters only.";
      }

      if (
        trimmedPhone &&
        !PHONE_REGEX.test(trimmedPhone)
      ) {
        errors.phone =
          "Please enter a valid international phone number.";
      }

      setPersonalInformationErrors(
        errors
      );

      return (
        Object.keys(errors).length === 0
      );
    };

  const canProceedToNextStep =
    (): boolean =>
      currentStep !== 2 ||
      validatePersonalInformation();

  const nextStep = async () => {
    if (!canProceedToNextStep()) {
      return;
    }

    /**
     * Existing consultation lookup is only
     * required when database persistence is
     * enabled.
     *
     * In EmailJS-only mode, the form must
     * always continue to the next step.
     */
    if (
      consultationConfig.persistenceEnabled &&
      currentStep === 1 &&
      !existingConsultation
    ) {
      try {
        const consultation =
          await consultationApi.getByEmail(
            formData.email.trim()
          );

        const consultationServices =
          consultation.consultationServices.map(
            (service) => ({
              category:
                service.category as ConsultationRequest["consultationServices"][number]["category"],

              topics:
                service.topics,
            })
          );

        const existingRequest: ConsultationRequest =
          {
            id: consultation.id.toString(),

            referenceNumber:
              consultation.referenceNumber,

            email:
              consultation.email,

            firstName:
              consultation.firstName,

            lastName:
              consultation.lastName,

            phone:
              consultation.phone,

            consultationServices,

            additionalDetails:
              consultation.additionalDetails ??
              "",

            status:
              consultation.status as ConsultationRequest["status"],

            createdAt:
              consultation.createdAt,

            updatedAt:
              consultation.updatedAt,
          };

        setExistingConsultation(
          existingRequest
        );

        setFormData({
          email:
            consultation.email,

          firstName:
            consultation.firstName,

          lastName:
            consultation.lastName,

          phone:
            consultation.phone,

          consultationServices,

          additionalDetails:
            consultation.additionalDetails ??
            "",
        });

        /**
         * Important:
         *
         * Even when an existing consultation
         * is found, continue to Personal
         * Information instead of stopping
         * on the Email step.
         */
      } catch {
        /**
         * No existing consultation found.
         *
         * Continue with a new consultation.
         */
      }
    }

    /**
     * Always move to the next step.
     */
    setCurrentStep((previous) =>
      Math.min(
        previous + 1,
        totalSteps
      )
    );
  };

  const previousStep = () => {
    setCurrentStep((previous) =>
      Math.max(
        previous - 1,
        1
      )
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

  const cancelEditing = () => {
    setCurrentStep(1);

    setFormData(
      consultationInitialValues
    );

    setPersonalInformationErrors({});

    setExistingConsultation(null);
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
    cancelEditing,

    resetForm,
  };
};

export default useConsultationForm;