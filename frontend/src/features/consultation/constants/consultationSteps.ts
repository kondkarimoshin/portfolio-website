export interface ConsultationStep {
  id: number;
  title: string;
}

export const consultationSteps: ConsultationStep[] = [
  {
    id: 1,
    title: "Email",
  },
  {
    id: 2,
    title: "Personal Information",
  },
  {
    id: 3,
    title: "Category",
  },
  {
    id: 4,
    title: "Topic",
  },
  {
    id: 5,
    title: "Additional Details",
  },
  {
    id: 6,
    title: "Review & Submit",
  },
];