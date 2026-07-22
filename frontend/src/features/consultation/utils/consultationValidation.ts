import type { ConsultationFormData } from "../types/consultation.types";

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export const validateEmail = (
  email: string
): ValidationResult => {
  const normalizedEmail =
    email.trim().toLowerCase();

  if (!normalizedEmail) {
    return {
      valid: false,
      error: "Email address is required.",
    };
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    !emailRegex.test(normalizedEmail)
  ) {
    return {
      valid: false,
      error:
        "Please enter a valid email address.",
    };
  }

  return {
    valid: true,
  };
};

export const validateConsultation = (
  formData: ConsultationFormData
): ValidationResult => {
  const emailValidation =
    validateEmail(formData.email);

  if (!emailValidation.valid) {
    return emailValidation;
  }

  const firstName =
    formData.firstName.trim();

  const lastName =
    formData.lastName.trim();

  const phone =
    formData.phone.trim();

  if (!firstName) {
    return {
      valid: false,
      error: "First name is required.",
    };
  }

  if (firstName.length < 3) {
    return {
      valid: false,
      error:
        "First name must be at least 3 characters.",
    };
  }

  if (
    !/^[A-Za-z\s'-]+$/.test(firstName)
  ) {
    return {
      valid: false,
      error:
        "First name can contain letters only.",
    };
  }

  if (
    lastName &&
    !/^[A-Za-z\s'-]+$/.test(lastName)
  ) {
    return {
      valid: false,
      error:
        "Last name can contain letters only.",
    };
  }

  if (
    phone &&
    !/^\+?[1-9]\d{7,14}$/.test(
      phone.replace(/\s+/g, "")
    )
  ) {
    return {
      valid: false,
      error:
        "Please enter a valid international phone number.",
    };
  }

  if (
    !formData.consultationServices.length
  ) {
    return {
      valid: false,
      error:
        "Please add at least one consultation service.",
    };
  }

  for (const service of formData.consultationServices) {
    if (!service.category) {
      return {
        valid: false,
        error:
          "Please select a consultation category.",
      };
    }

    if (!service.topics.length) {
      return {
        valid: false,
        error: `Please select at least one topic for "${service.category}".`,
      };
    }
  }

  return {
    valid: true,
  };
};