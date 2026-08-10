import apiClient from "./apiClient";

import type { ConsultationApiRequest } from "./dto/ConsultationApiRequest";
import type { ConsultationApiResponse } from "./dto/ConsultationApiResponse";

class ConsultationApi {

  async create(
    request: ConsultationApiRequest
  ): Promise<ConsultationApiResponse> {

    const response =
      await apiClient.post<ConsultationApiResponse>(
        "/consultations",
        request
      );

    return response.data;
  }

  async getAll(): Promise<ConsultationApiResponse[]> {

    const response =
      await apiClient.get<ConsultationApiResponse[]>(
        "/consultations"
      );

    return response.data;
  }

  async getById(
    id: number
  ): Promise<ConsultationApiResponse> {

    const response =
      await apiClient.get<ConsultationApiResponse>(
        `/consultations/${id}`
      );

    return response.data;
  }
  async getByEmail(
    email: string
  ): Promise<ConsultationApiResponse> {

    const response =
      await apiClient.get<ConsultationApiResponse>(
        "/consultations/by-email",
        {
          params: {
            email,
          },
        }
      );

    return response.data;
  }

  async update(
    id: number,
    request: ConsultationApiRequest
  ): Promise<ConsultationApiResponse> {

    const response =
      await apiClient.put<ConsultationApiResponse>(
        `/consultations/${id}`,
        request
      );

    return response.data;
  }

  async updateStatus(
    id: number,
    status: string
  ): Promise<ConsultationApiResponse> {

    const response =
      await apiClient.patch<ConsultationApiResponse>(
        `/consultations/${id}/status`,
        null,
        {
          params: {
            status,
          },
        }
      );

    return response.data;
  }

  async delete(
    id: number
  ): Promise<void> {

    await apiClient.delete(
      `/consultations/${id}`
    );
  }

}

export const consultationApi =
  new ConsultationApi();