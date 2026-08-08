package com.mkondkari.portfolio.consultation.service.impl;

import com.mkondkari.portfolio.common.exception.ResourceNotFoundException;
import com.mkondkari.portfolio.consultation.dto.ConsultationRequest;
import com.mkondkari.portfolio.consultation.dto.ConsultationResponse;
import com.mkondkari.portfolio.consultation.entity.Consultation;
import com.mkondkari.portfolio.consultation.entity.ConsultationRequestService;
import com.mkondkari.portfolio.consultation.entity.ConsultationStatus;
import com.mkondkari.portfolio.consultation.mapper.ConsultationMapper;
import com.mkondkari.portfolio.consultation.repository.ConsultationRepository;
import com.mkondkari.portfolio.consultation.service.ConsultationService;
import com.mkondkari.portfolio.consultation.service.email.ConsultationEmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ConsultationServiceImpl implements ConsultationService {

    private final ConsultationRepository consultationRepository;
    private final ConsultationMapper consultationMapper;
    private final ConsultationEmailService consultationEmailService;

    @Override
    public ConsultationResponse createConsultation(
            ConsultationRequest request
    ) {

        Consultation consultation =
                consultationMapper.toEntity(trimRequest(request));

        consultation.setStatus(ConsultationStatus.IN_PROGRESS);

        List<ConsultationRequestService> services =
                consultationMapper.toConsultationServices(
                        consultation,
                        request.getConsultationServices()
                );

        consultation.setConsultationServices(services);

        /*
         * First save to generate database ID
         */
        Consultation saved =
                consultationRepository.save(consultation);

        /*
         * Generate public reference number
         */
        saved.setReferenceNumber(
                generateReferenceNumber(saved.getId())
        );

        /*
         * Save again with reference number
         */
        saved =
                consultationRepository.save(saved);

        ConsultationResponse response =
                consultationMapper.toResponse(saved);

        response.setConsultationServices(
                consultationMapper.toConsultationServiceResponses(
                        saved.getConsultationServices()
                )
        );

        /*
         * Send confirmation email.
         * Email failure must not rollback the database transaction.
         */
        try {

            consultationEmailService.sendConsultationConfirmation(
                    response
            );

        } catch (Exception e) {

            System.err.println(
                    "Failed to send consultation email: "
                            + e.getMessage()
            );
        }

        return response;
    }

    @Override
    @Transactional(readOnly = true)
    public Page<ConsultationResponse> getAllConsultations(
            Pageable pageable
    ) {

        return consultationRepository
                .findAll(pageable)
                .map(consultation -> {

                    ConsultationResponse response =
                            consultationMapper.toResponse(
                                    consultation
                            );

                    response.setConsultationServices(
                            consultationMapper.toConsultationServiceResponses(
                                    consultation.getConsultationServices()
                            )
                    );

                    return response;
                });
    }

    @Override
    @Transactional(readOnly = true)
    public ConsultationResponse getConsultationById(
            Long id
    ) {

        Consultation consultation =
                consultationRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Consultation not found with id: " + id
                                )
                        );

        ConsultationResponse response =
                consultationMapper.toResponse(
                        consultation
                );

        response.setConsultationServices(
                consultationMapper.toConsultationServiceResponses(
                        consultation.getConsultationServices()
                )
        );

        return response;
    }

    @Override
    @Transactional(readOnly = true)
    public ConsultationResponse getConsultationByEmail(
            String email
    ) {

        Consultation consultation =
                consultationRepository.findByEmailIgnoreCase(
                                email.trim()
                        )
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Consultation not found for email: " + email
                                )
                        );

        ConsultationResponse response =
                consultationMapper.toResponse(
                        consultation
                );

        response.setConsultationServices(
                consultationMapper.toConsultationServiceResponses(
                        consultation.getConsultationServices()
                )
        );

        return response;
    }

    @Override
    public ConsultationResponse updateConsultation(
            Long id,
            ConsultationRequest request
    ) {

        Consultation consultation =
                consultationRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Consultation not found with id: " + id
                                )
                        );

        consultation.setStatus(
                ConsultationStatus.IN_PROGRESS
        );

        trimRequest(request);

        consultation.setEmail(request.getEmail());
        consultation.setFirstName(request.getFirstName());
        consultation.setLastName(request.getLastName());
        consultation.setPhone(request.getPhone());
        consultation.setAdditionalDetails(
                request.getAdditionalDetails()
        );

        consultation.getConsultationServices().clear();

        List<ConsultationRequestService> services =
                consultationMapper.toConsultationServices(
                        consultation,
                        request.getConsultationServices()
                );

        consultation.getConsultationServices().addAll(services);

        Consultation updated =
                consultationRepository.save(consultation);

        ConsultationResponse response =
                consultationMapper.toResponse(updated);

        response.setConsultationServices(
                consultationMapper.toConsultationServiceResponses(
                        updated.getConsultationServices()
                )
        );

        /*
         * Send updated consultation email.
         * Email failure must not rollback the database update.
         */
        try {

            consultationEmailService.sendConsultationUpdate(
                    response
            );

        } catch (Exception e) {

            System.err.println(
                    "Failed to send consultation update email: "
                            + e.getMessage()
            );
        }

        return response;
    }

    @Override
    public ConsultationResponse updateConsultationStatus(
            Long id,
            ConsultationStatus status
    ) {

        Consultation consultation =
                consultationRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Consultation not found with id: " + id
                                )
                        );

        consultation.setStatus(status);

        Consultation updated =
                consultationRepository.save(consultation);

        ConsultationResponse response =
                consultationMapper.toResponse(updated);

        response.setConsultationServices(
                consultationMapper.toConsultationServiceResponses(
                        updated.getConsultationServices()
                )
        );

        return response;
    }

    @Override
    public void deleteConsultation(
            Long id
    ) {

        Consultation consultation =
                consultationRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Consultation not found with id: " + id
                                )
                        );

        consultationRepository.delete(consultation);
    }

    private ConsultationRequest trimRequest(
            ConsultationRequest request
    ) {

        request.setEmail(trim(request.getEmail()));
        request.setFirstName(trim(request.getFirstName()));
        request.setLastName(trim(request.getLastName()));
        request.setPhone(trim(request.getPhone()));
        request.setAdditionalDetails(
                trim(request.getAdditionalDetails())
        );

        return request;
    }

    private String trim(
            String value
    ) {

        return value == null
                ? null
                : value.trim();
    }

    private String generateReferenceNumber(
            Long id
    ) {

        return String.format(
                "CONS-%s-%06d",
                LocalDate.now()
                        .format(
                                DateTimeFormatter.BASIC_ISO_DATE
                        ),
                id
        );
    }
}