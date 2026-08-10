import { consultationTopics } from "../constants/consultationTopics";
import { mockConsultations } from "../data/mockConsultations";

import type {
  ConsultationCategory,
  ConsultationRequest,
  ConsultationTopic,
  ConsultationStatus,
} from "../types/consultation.types";

const ACTIVE_STATUSES: ConsultationStatus[] = [
  "pending",
  "in-review",
  "scheduled",
  "in-progress",
];

class ConsultationService {
  private normalizeEmail(
    email: string
  ): string {
    return email.trim().toLowerCase();
  }

  getAll(): ConsultationRequest[] {
    return mockConsultations;
  }

  findByEmail(
    email: string
  ): ConsultationRequest[] {
    const normalizedEmail =
      this.normalizeEmail(email);

    return mockConsultations.filter(
      (consultation) =>
        this.normalizeEmail(
          consultation.email
        ) === normalizedEmail
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
    const normalizedEmail =
      this.normalizeEmail(email);

    return mockConsultations.find(
      (consultation) =>
        this.normalizeEmail(
          consultation.email
        ) === normalizedEmail &&
        consultation.consultationServices.some(
          (service) =>
            service.category === category
        )
    );
  }

  findActiveByEmail(
    email: string
  ): ConsultationRequest | undefined {
    const normalizedEmail =
      this.normalizeEmail(email);

    return mockConsultations.find(
      (consultation) =>
        this.normalizeEmail(
          consultation.email
        ) === normalizedEmail &&
        ACTIVE_STATUSES.includes(
          consultation.status
        )
    );
  }

  create(
    request: ConsultationRequest
  ): void {
    mockConsultations.push(request);
  }

  update(
    request: ConsultationRequest
  ): void {
    const index =
      mockConsultations.findIndex(
        (consultation) =>
          consultation.id === request.id
      );

    if (index !== -1) {
      mockConsultations[index] =
        request;
    }
  }

  getTopics(): ConsultationTopic[] {
    return consultationTopics;
  }

  getTopicsByCategory(
    category: ConsultationCategory
  ): ConsultationTopic[] {
    return consultationTopics.filter(
      (topic) =>
        topic.category === category
    );
  }

  getTopicById(
    topicId: string
  ): ConsultationTopic | undefined {
    return consultationTopics.find(
      (topic) =>
        topic.id === topicId
    );
  }
}

export const consultationService =
  new ConsultationService();