export interface ConsultationApiResponse {
  id: number;

  referenceNumber: string;

  email: string;

  firstName: string;
  lastName: string;
  phone: string;

  additionalDetails: string;

  status: string;

  consultationServices: {
    category: string;
    topics: string[];
  }[];

  createdAt: string;
  updatedAt: string;
}