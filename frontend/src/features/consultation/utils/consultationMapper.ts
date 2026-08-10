import type {
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

    email: formData.email.trim().toLowerCase(),

    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    phone: formData.phone.trim(),

    consultationServices:
      formData.consultationServices,

    additionalDetails:
      formData.additionalDetails.trim(),

    status: "pending",

    createdAt: now,
    updatedAt: now,
  };
};