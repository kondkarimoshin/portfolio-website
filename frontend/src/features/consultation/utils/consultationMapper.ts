import type {
  ConsultationCategory,
  ConsultationFormData,
  ConsultationRequest,
} from "../types/consultation.types";

export const mapToConsultationRequest = (
  id: string,
  formData: ConsultationFormData
): ConsultationRequest => {
  const now = new Date().toISOString();

  return {
    id,

    email: formData.email.trim(),

    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    phone: formData.phone.trim(),

    category: formData.category as ConsultationCategory,

    topics: formData.topics,

    additionalDetails: formData.additionalDetails.trim(),

    createdAt: now,
    updatedAt: now,
  };
};