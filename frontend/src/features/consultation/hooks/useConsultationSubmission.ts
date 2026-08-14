import { useState } from "react";

import { consultationApi } from "../../../services/api/consultationApi";
import { toApiRequest } from "../../../services/api/mappers/consultationApiMapper";

import { consultationConfig } from "../../../config/consultationConfig";

import { consultationTopics } from "../constants/consultationTopics";
import { sendConsultationEmail } from "../services/consultationEmailService";

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

const formatCategory = (category: string): string =>
  category
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

const buildConsultationAreas = (
  formData: ConsultationFormData
): string => {
  return formData.consultationServices
    .map((service) => {
      const category = formatCategory(
        service.category
      );

      const topics = service.topics
        .map((topicId) => {
          const topic =
            consultationTopics.find(
              (item) => item.id === topicId
            );

          return topic?.title ?? topicId;
        })
        .map(
          (title) =>
            `<div style="margin: 0 0 6px 18px;">• ${title}</div>`
        )
        .join("");

      return `
        <div style="margin-bottom: 18px;">
          <div style="
            font-weight: 700;
            color: #1e3a5f;
            margin-bottom: 8px;
          ">
            ${category}
          </div>

          ${topics}
        </div>
      `;
    })
    .join("");
};

const buildEmailData = (
  consultationId: string,
  formData: ConsultationFormData
) => {
  return {
    consultationId,

    firstName:
      formData.firstName.trim(),

    lastName:
      formData.lastName.trim(),

    email:
      formData.email
        .trim()
        .toLowerCase(),

    phone:
      formData.phone.trim(),

    consultationAreas:
      buildConsultationAreas(
        formData
      ),

    additionalDetails:
      formData.additionalDetails.trim() || "NA",
  };
};

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
     * Safety check:
     * At least one submission channel
     * must be enabled.
     */
    if (
      !consultationConfig.emailEnabled &&
      !consultationConfig.persistenceEnabled
    ) {
      return fail(
        "Consultation submission is currently unavailable. Please try again later."
      );
    }

    /**
     * Preserve the existing consultation
     * reference when available.
     *
     * Otherwise generate a new reference
     * on the frontend.
     */
    const referenceNumber =
      existingConsultation?.referenceNumber ??
      generateConsultationId();

    try {
      /**
       * EMAIL
       *
       * EmailJS is used when email
       * submission is enabled.
       */
      if (consultationConfig.emailEnabled) {
        await sendConsultationEmail(
          buildEmailData(
            referenceNumber,
            formData
          )
        );
      }

      /**
       * DATABASE PERSISTENCE
       *
       * Currently controlled through:
       *
       * VITE_CONSULTATION_PERSISTENCE_ENABLED
       *
       * When false, no Railway/backend
       * request is made.
       */
      if (
        consultationConfig.persistenceEnabled
      ) {
        /**
         * Update existing consultation.
         */
        if (existingConsultation) {
          const updatedRequest: ConsultationRequest = {
            ...existingConsultation,

            email:
              formData.email,

            firstName:
              formData.firstName,

            lastName:
              formData.lastName,

            phone:
              formData.phone,

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
        }

        /**
         * Create new consultation.
         */
        const request =
          mapToConsultationRequest(
            referenceNumber,
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
      }

      /**
       * EMAIL-ONLY MODE
       *
       * No Railway/backend request is made.
       */
      setConsultationId(
        referenceNumber
      );

      setSubmissionState("success");

      return {
        success: true,
        consultationId:
          referenceNumber,
      };

    } catch (error) {
      console.error(
        "Consultation submission failed:",
        error
      );

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