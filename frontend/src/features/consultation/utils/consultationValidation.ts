import type { ConsultationFormData } from "../types/consultation.types";

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NAME_REGEX =
  /^[A-Za-z\s'-]+$/;

const PHONE_REGEX =
  /^\+?[1-9]\d{7,14}$/;

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

  if (
    !EMAIL_REGEX.test(
      normalizedEmail
    )
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

  const {
    firstName,
    lastName,
    phone,
    consultationServices,
  } = formData;

  const trimmedFirstName =
    firstName.trim();

  const trimmedLastName =
    lastName.trim();

  const normalizedPhone =
    phone.trim().replace(/\s+/g, "");

  if (!trimmedFirstName) {
    return {
      valid: false,
      error: "First name is required.",
    };
  }

  if (
    trimmedFirstName.length < 3
  ) {
    return {
      valid: false,
      error:
        "First name must be at least 3 characters.",
    };
  }

  if (
    !NAME_REGEX.test(
      trimmedFirstName
    )
  ) {
    return {
      valid: false,
      error:
        "First name can contain letters only.",
    };
  }

  if (
    trimmedLastName &&
    !NAME_REGEX.test(
      trimmedLastName
    )
  ) {
    return {
      valid: false,
      error:
        "Last name can contain letters only.",
    };
  }

  if (
    normalizedPhone &&
    !PHONE_REGEX.test(
      normalizedPhone
    )
  ) {
    return {
      valid: false,
      error:
        "Please enter a valid international phone number.",
    };
  }

  if (
    !consultationServices.length
  ) {
    return {
      valid: false,
      error:
        "Please add at least one consultation service.",
    };
  }

  for (const service of consultationServices) {
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