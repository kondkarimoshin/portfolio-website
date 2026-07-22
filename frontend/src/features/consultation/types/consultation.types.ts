export type ConsultationCategory =
  | "career-mentorship"
  | "interview-preparation"
  | "automation-guidance";

export type SelectedConsultationCategory =
  ConsultationCategory | "";

export type ConsultationStatus =
  | "pending"
  | "in-review"
  | "scheduled"
  | "in-progress"
  | "completed"
  | "cancelled";

export interface ConsultationTopic {
  id: string;
  category: ConsultationCategory;
  title: string;
  description: string;
}

export interface ConsultationServiceSelection {
  category: ConsultationCategory;
  topics: string[];
}

export interface ConsultationRequest {
  id: string;

  email: string;

  firstName: string;
  lastName: string;
  phone: string;

  consultationServices: ConsultationServiceSelection[];

  additionalDetails?: string;

  status: ConsultationStatus;

  createdAt: string;
  updatedAt: string;
}

export interface ConsultationFormData {
  email: string;

  firstName: string;
  lastName: string;
  phone: string;

  consultationServices: ConsultationServiceSelection[];

  additionalDetails: string;
}

export interface ConsultationSession {
  consultation: ConsultationRequest | null;
  isEditing: boolean;
}

export interface PersonalInformationErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
}