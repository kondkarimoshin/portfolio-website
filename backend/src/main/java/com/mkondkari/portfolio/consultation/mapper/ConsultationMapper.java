package com.mkondkari.portfolio.consultation.mapper;

import com.mkondkari.portfolio.consultation.dto.ConsultationRequest;
import com.mkondkari.portfolio.consultation.dto.ConsultationResponse;
import com.mkondkari.portfolio.consultation.dto.ConsultationServiceRequest;
import com.mkondkari.portfolio.consultation.dto.ConsultationServiceResponse;
import com.mkondkari.portfolio.consultation.entity.Consultation;
import com.mkondkari.portfolio.consultation.entity.ConsultationRequestService;
import com.mkondkari.portfolio.consultation.entity.ConsultationTopic;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.ArrayList;
import java.util.List;

@Mapper(
        componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE
)
public interface ConsultationMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "consultationServices", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Consultation toEntity(ConsultationRequest request);

    @Mapping(target = "consultationServices", ignore = true)
    @Mapping(target = "referenceNumber", source = "referenceNumber")
    ConsultationResponse toResponse(Consultation consultation);

    default List<ConsultationRequestService> toConsultationServices(
            Consultation consultation,
            List<ConsultationServiceRequest> requests
    ) {

        List<ConsultationRequestService> services = new ArrayList<>();

        if (requests == null) {
            return services;
        }

        for (ConsultationServiceRequest request : requests) {

            ConsultationRequestService service = new ConsultationRequestService();

            service.setCategory(request.getCategory());
            service.setConsultation(consultation);

            List<ConsultationTopic> topics = new ArrayList<>();

            if (request.getTopics() != null) {
                for (String topicValue : request.getTopics()) {

                    ConsultationTopic topic = new ConsultationTopic();

                    topic.setTopic(topicValue);
                    topic.setConsultationService(service);

                    topics.add(topic);
                }
            }

            service.setTopics(topics);

            services.add(service);
        }

        return services;
    }

    default List<ConsultationServiceResponse> toConsultationServiceResponses(
            List<ConsultationRequestService> services
    ) {

        List<ConsultationServiceResponse> response = new ArrayList<>();

        if (services == null) {
            return response;
        }

        for (ConsultationRequestService service : services) {

            ConsultationServiceResponse item =
                    new ConsultationServiceResponse();

            item.setCategory(service.getCategory());

            List<String> topics = new ArrayList<>();

            if (service.getTopics() != null) {
                for (ConsultationTopic topic : service.getTopics()) {
                    topics.add(topic.getTopic());
                }
            }

            item.setTopics(topics);

            response.add(item);
        }

        return response;
    }
}