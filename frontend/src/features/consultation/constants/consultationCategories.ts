import type { ConsultationCategory } from "../types/consultation.types";

export interface ConsultationCategoryOption {
  id: ConsultationCategory;
  title: string;
  description: string;
  icon: string;
}

export const consultationCategories: ConsultationCategoryOption[] = [
  {
    id: "career-mentorship",
    title: "Career Mentorship",
    description:
      "Career planning, resume review and professional growth.",
    icon: "👨‍💼",
  },
  {
    id: "interview-preparation",
    title: "Interview Preparation",
    description:
      "Mock interviews, technical discussions and interview strategy.",
    icon: "🎤",
  },
  {
    id: "automation-guidance",
    title: "Automation Guidance",
    description:
      "Framework design, API automation, CI/CD and best practices.",
    icon: "🤖",
  },
];