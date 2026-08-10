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

export interface ConsultationBase {
  email: string;

  firstName: string;
  lastName: string;
  phone: string;

  consultationServices: ConsultationServiceSelection[];

  additionalDetails: string;
}

export interface ConsultationFormData
  extends ConsultationBase {}

export interface ConsultationRequest
  extends ConsultationBase {
  id: string;

  referenceNumber?: string;

  status: ConsultationStatus;

  createdAt: string;
  updatedAt: string;
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