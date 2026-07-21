export type ConsultationCategory =
  | "career-mentorship"
  | "interview-preparation"
  | "automation-guidance";

export type SelectedConsultationCategory =
  ConsultationCategory | "";

export interface ConsultationTopic {
  id: string;
  category: ConsultationCategory;
  title: string;
  description: string;
}

export interface ConsultationRequest {
  id: string;
  email: string;

  firstName: string;
  lastName: string;
  phone: string;

  category: ConsultationCategory;
  topics: string[];

  additionalDetails?: string;

  createdAt: string;
  updatedAt: string;
}

export interface ConsultationFormData {
  email: string;

  firstName: string;
  lastName: string;
  phone: string;

  category: SelectedConsultationCategory;

  topics: string[];

  additionalDetails: string;
}

