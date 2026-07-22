import { useState } from "react";

import { consultationService } from "../services/consultationService";

import { generateConsultationId } from "../utils/consultationId";
import { mapToConsultationRequest } from "../utils/consultationMapper";
import { validateConsultation } from "../utils/consultationValidation";

import type {
  ConsultationFormData,
  ConsultationRequest,
} from "../types/consultation.types";

import type {
  SubmissionResult,
  SubmissionState,
} from "../types/submission.types";

const useConsultationSubmission = () => {
  const [
    submissionState,
    setSubmissionState,
  ] = useState<SubmissionState>(
    "editing"
  );

  const [
    consultationId,
    setConsultationId,
  ] = useState("");

  const [error, setError] =
    useState("");

  const submit = async (
    formData: ConsultationFormData,
    existingConsultation?: ConsultationRequest | null
  ): Promise<SubmissionResult> => {
    setSubmissionState("submitting");
    setError("");

    const validation =
      validateConsultation(formData);

    if (!validation.valid) {
      setSubmissionState("error");
      setError(
        validation.error ??
          "Validation failed."
      );

      return {
        success: false,
        error: validation.error,
      };
    }

    if (existingConsultation) {
      const updatedRequest: ConsultationRequest = {
        ...existingConsultation,

        firstName:
          formData.firstName,
        lastName:
          formData.lastName,
        phone: formData.phone,

        consultationServices:
          formData.consultationServices,

        additionalDetails:
          formData.additionalDetails,

        updatedAt:
          new Date().toISOString(),
      };

      consultationService.update(
        updatedRequest
      );

      setConsultationId(
        updatedRequest.id
      );

      setSubmissionState("success");

      return {
        success: true,
        consultationId:
          updatedRequest.id,
      };
    }

    for (const service of formData.consultationServices) {
      const existing =
        consultationService.findByCategory(
          formData.email,
          service.category
        );

      if (existing) {
        const message = `You already have an active consultation for "${service.category}".`;

        setSubmissionState("error");
        setError(message);

        return {
          success: false,
          error: message,
        };
      }
    }

    const id =
      generateConsultationId();

    const request =
      mapToConsultationRequest(
        id,
        formData
      );

    consultationService.create(
      request
    );

    setConsultationId(id);
    setSubmissionState("success");

    return {
      success: true,
      consultationId: id,
    };
  };

  const reset = () => {
    setSubmissionState("editing");
    setConsultationId("");
    setError("");
  };

  return {
    submit,

    submissionState,
    consultationId,
    error,

    reset,
  };
};

export default useConsultationSubmission;