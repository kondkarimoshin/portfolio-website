import type { ConsultationTopic } from "../types/consultation.types";

export const consultationTopics: ConsultationTopic[] = [
  {
    id: "resume-review",
    category: "career-mentorship",
    title: "Resume Review",
    description:
      "Detailed review of your resume with actionable improvement suggestions.",
  },
  {
    id: "career-roadmap",
    category: "career-mentorship",
    title: "Career Roadmap",
    description:
      "Guidance on career planning, role transitions, and long-term growth.",
  },
  {
    id: "automation-framework",
    category: "automation-guidance",
    title: "Automation Framework",
    description:
      "Design scalable automation frameworks using industry best practices.",
  },
  {
    id: "ci-cd",
    category: "automation-guidance",
    title: "CI/CD Strategy",
    description:
      "Build reliable CI/CD pipelines for automated testing and deployment.",
  },
  {
    id: "mock-interview",
    category: "interview-preparation",
    title: "Mock Interview",
    description:
      "Practice interview sessions with detailed feedback and improvement areas.",
  },
  {
    id: "technical-interview",
    category: "interview-preparation",
    title: "Technical Interview Preparation",
    description:
      "Prepare for technical interviews with coding, testing, and architecture discussions.",
  },
];