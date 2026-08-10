import type {
  ConsultationRequest,
} from "../../../features/consultation/types/consultation.types";

import type {
  ConsultationApiRequest,
} from "../dto/ConsultationApiRequest";

export const toApiRequest = (
  request: ConsultationRequest
): ConsultationApiRequest => ({
  email: request.email,

  firstName: request.firstName,
  lastName: request.lastName,
  phone: request.phone,

  additionalDetails: request.additionalDetails,

  consultationServices:
    request.consultationServices,
});