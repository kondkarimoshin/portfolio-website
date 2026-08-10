export interface ConsultationApiRequest {
  email: string;

  firstName: string;
  lastName: string;
  phone: string;

  additionalDetails: string;

  consultationServices: {
    category: string;
    topics: string[];
  }[];
}