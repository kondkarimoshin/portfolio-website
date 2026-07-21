import type { ConsultationFormData } from "../types/consultation.types";

export const consultationInitialValues: ConsultationFormData = {
  email: "",

  firstName: "",
  lastName: "",
  phone: "",

  category: "",

  topics: [],

  additionalDetails: "",
};