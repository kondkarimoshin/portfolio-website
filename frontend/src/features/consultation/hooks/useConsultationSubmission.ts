import { useState } from "react";

import { consultationApi } from "../../../services/api/consultationApi";
import { toApiRequest } from "../../../services/api/mappers/consultationApiMapper";

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
  ] = useState<SubmissionState>("editing");

  const [
    consultationId,
    setConsultationId,
  ] = useState("");

  const [error, setError] = useState("");

  const submit = async (
    formData: ConsultationFormData,
    existingConsultation?: ConsultationRequest | null
  ): Promise<SubmissionResult> => {

    const fail = (
      message: string
    ): SubmissionResult => {

      setSubmissionState("error");
      setError(message);

      return {
        success: false,
        error: message,
      };
    };

    setSubmissionState("submitting");
    setError("");

    const validation =
      validateConsultation(formData);

    if (!validation.valid) {
      return fail(
        validation.error ??
          "Validation failed."
      );
    }

    /**
     * Update existing consultation
     */
    if (existingConsultation) {
      try {
        const updatedRequest: ConsultationRequest = {
          ...existingConsultation,
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          consultationServices:
            formData.consultationServices,
          additionalDetails:
            formData.additionalDetails,
        };

        const response =
          await consultationApi.update(
            Number(existingConsultation.id),
            toApiRequest(updatedRequest)
          );

        setConsultationId(
          response.referenceNumber
        );

        setSubmissionState("success");

        return {
          success: true,
          consultationId:
            response.referenceNumber,
        };

      } catch (error) {

        console.error(error);

        return fail(
          "Unable to update your consultation request. Please try again."
        );
      }
    }

    /**
     * Create new consultation
     */
    try {
      const request =
        mapToConsultationRequest(
          generateConsultationId(),
          formData
        );

      const response =
        await consultationApi.create(
          toApiRequest(request)
        );

      setConsultationId(
        response.referenceNumber
      );

      setSubmissionState("success");

      return {
        success: true,
        consultationId:
          response.referenceNumber,
      };

    } catch (error) {

      console.error(error);

      return fail(
        "Unable to submit your consultation request. Please try again."
      );
    }
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