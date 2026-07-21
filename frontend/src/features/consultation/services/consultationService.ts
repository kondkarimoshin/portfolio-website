import { consultationTopics } from "../constants/consultationTopics";
import { mockConsultations } from "../data/mockConsultations";

import type {
  ConsultationCategory,
  ConsultationRequest,
  ConsultationTopic,
} from "../types/consultation.types";

class ConsultationService {
  // --------------------------------------------------------------------------
  // Consultation Requests
  // --------------------------------------------------------------------------

  /**
   * Returns all consultation requests.
   */
  getAll(): ConsultationRequest[] {
    return mockConsultations;
  }

  /**
   * Returns all consultation requests for a given email.
   */
  findByEmail(email: string): ConsultationRequest[] {
    return mockConsultations.filter(
      (consultation) => consultation.email === email
    );
  }

  /**
   * Finds a consultation request by email and category.
   */
  findByCategory(
    email: string,
    category: ConsultationCategory
  ): ConsultationRequest | undefined {
    return mockConsultations.find(
      (consultation) =>
        consultation.email === email &&
        consultation.category === category
    );
  }

  /**
   * Creates a new consultation request.
   */
  create(request: ConsultationRequest): void {
    mockConsultations.push(request);
  }

  /**
   * Updates an existing consultation request.
   */
  update(request: ConsultationRequest): void {
    const index = mockConsultations.findIndex(
      (consultation) => consultation.id === request.id
    );

    if (index !== -1) {
      mockConsultations[index] = request;
    }
  }

  // --------------------------------------------------------------------------
  // Consultation Topics
  // --------------------------------------------------------------------------

  /**
   * Returns all consultation topics.
   */
  getTopics(): ConsultationTopic[] {
    return consultationTopics;
  }

  /**
   * Returns all topics for a specific category.
   */
  getTopicsByCategory(
    category: ConsultationCategory
  ): ConsultationTopic[] {
    return consultationTopics.filter(
      (topic) => topic.category === category
    );
  }

  /**
   * Returns a topic by its id.
   */
  getTopicById(
    topicId: string
  ): ConsultationTopic | undefined {
    return consultationTopics.find(
      (topic) => topic.id === topicId
    );
  }
}

export const consultationService = new ConsultationService();