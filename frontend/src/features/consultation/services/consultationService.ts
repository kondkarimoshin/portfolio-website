import { consultationTopics } from "../constants/consultationTopics";
import { mockConsultations } from "../data/mockConsultations";

import type {
  ConsultationCategory,
  ConsultationRequest,
  ConsultationTopic,
} from "../types/consultation.types";

class ConsultationService {
  getAll(): ConsultationRequest[] {
    return mockConsultations;
  }

  findByEmail(email: string): ConsultationRequest[] {
    const normalizedEmail = email.trim().toLowerCase();

    return mockConsultations.filter(
      (consultation) =>
        consultation.email.trim().toLowerCase() === normalizedEmail
    );
  }

  /**
   * Checks whether an active consultation already contains
   * the selected category.
   */
  findByCategory(
    email: string,
    category: ConsultationCategory
  ): ConsultationRequest | undefined {
    const normalizedEmail = email.trim().toLowerCase();

    return mockConsultations.find(
      (consultation) =>
        consultation.email.trim().toLowerCase() === normalizedEmail &&
        consultation.consultationServices.some(
          (service) => service.category === category
        )
    );
  }

  findActiveByEmail(
    email: string
  ): ConsultationRequest | undefined {
    const normalizedEmail = email.trim().toLowerCase();

    const activeStatuses = [
      "pending",
      "in-review",
      "scheduled",
      "in-progress",
    ];

    return mockConsultations.find(
      (consultation) =>
        consultation.email.trim().toLowerCase() === normalizedEmail &&
        activeStatuses.includes(consultation.status)
    );
  }

  create(request: ConsultationRequest): void {
    mockConsultations.push(request);
  }

  update(request: ConsultationRequest): void {
    const index = mockConsultations.findIndex(
      (consultation) => consultation.id === request.id
    );

    if (index !== -1) {
      mockConsultations[index] = request;
    }
  }

  getTopics(): ConsultationTopic[] {
    return consultationTopics;
  }

  getTopicsByCategory(
    category: ConsultationCategory
  ): ConsultationTopic[] {
    return consultationTopics.filter(
      (topic) => topic.category === category
    );
  }

  getTopicById(
    topicId: string
  ): ConsultationTopic | undefined {
    return consultationTopics.find(
      (topic) => topic.id === topicId
    );
  }
}

export const consultationService = new ConsultationService();