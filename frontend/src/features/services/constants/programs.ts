import type { Program } from "../types/services.types";

export const programs: Program[] = [
  {
    id: 1,
    title: "Interview Preparation",
    icon: "🎯",
    description:
      "Comprehensive preparation to help students and professionals succeed.",
    highlights: [
      "Resume Review",
      "Mock Interviews",
      "Java Automation",
      "Salary Negotiation",
    ],
  },
  {
    id: 2,
    title: "Enterprise Automation",
    icon: "⚙️",
    description:
      "Enterprise automation using real-world production practices.",
    highlights: [
      "Framework Design",
      "Selenium & Playwright",
      "API Automation",
      "Docker & CI/CD",
    ],
  },
  {
    id: 3,
    title: "Career Mentorship",
    icon: "🚀",
    description:
      "One-to-one mentoring for engineering career growth.",
    highlights: [
      "Career Planning",
      "Leadership",
      "Promotion Guidance",
      "Personal Mentoring",
    ],
  },
];