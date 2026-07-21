import { useState } from "react";

import { consultationService } from "../services/consultationService";

import { generateConsultationId } from "../utils/consultationId";
import { mapToConsultationRequest } from "../utils/consultationMapper";
import { validateConsultation } from "../utils/consultationValidation";

import type { ConsultationCategory,ConsultationFormData } from "../types/consultation.types";

import type {
    SubmissionResult,
    SubmissionState,
} from "../types/submission.types";

const useConsultationSubmission = () => {
    const [submissionState, setSubmissionState] =
        useState<SubmissionState>("editing");

    const [consultationId, setConsultationId] =
        useState("");

    const [error, setError] = useState("");

    const submit = async (
        formData: ConsultationFormData
    ): Promise<SubmissionResult> => {
        setSubmissionState("submitting");
        setError("");

        // --------------------------------------------------
        // Validation
        // --------------------------------------------------

        const validation =
            validateConsultation(formData);

        if (!validation.valid) {
            setSubmissionState("error");
            setError(validation.error ?? "Validation failed.");

            return {
                success: false,
                error: validation.error,
            };
        }

        // --------------------------------------------------
        // Duplicate Check
        // --------------------------------------------------

        const existing =
            consultationService.findByCategory(
                formData.email,
                formData.category as ConsultationCategory
            );

        if (existing) {
            const message =
                "You already have an active consultation for this category.";

            setSubmissionState("error");
            setError(message);

            return {
                success: false,
                error: message,
            };
        }

        // --------------------------------------------------
        // Generate Consultation ID
        // --------------------------------------------------

        const id = generateConsultationId();

        // --------------------------------------------------
        // Create Request
        // --------------------------------------------------

        const request =
            mapToConsultationRequest(
                id,
                formData
            );

        // --------------------------------------------------
        // Save
        // --------------------------------------------------

        consultationService.create(request);

        // --------------------------------------------------
        // Success
        // --------------------------------------------------

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