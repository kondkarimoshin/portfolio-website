import type { ConsultationFormData } from "../types/consultation.types";

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export const validateConsultation = (
  formData: ConsultationFormData
): ValidationResult => {
  if (!formData.email.trim()) {
    return {
      valid: false,
      error: "Email is required.",
    };
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    return {
      valid: false,
      error: "Please enter a valid email address.",
    };
  }

  if (!formData.firstName.trim()) {
    return {
      valid: false,
      error: "First name is required.",
    };
  }

  if (!formData.lastName.trim()) {
    return {
      valid: false,
      error: "Last name is required.",
    };
  }

  if (!formData.phone.trim()) {
    return {
      valid: false,
      error: "Phone number is required.",
    };
  }

  if (!formData.category) {
    return {
      valid: false,
      error: "Please select a consultation category.",
    };
  }

  if (!formData.topics) {
    return {
      valid: false,
      error: "Please select a consultation topic.",
    };
  }

  return {
    valid: true,
  };
};