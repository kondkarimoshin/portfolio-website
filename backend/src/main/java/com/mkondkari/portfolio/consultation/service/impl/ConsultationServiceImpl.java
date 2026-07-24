package com.mkondkari.portfolio.consultation.service.impl;

import com.mkondkari.portfolio.common.exception.ResourceNotFoundException;
import com.mkondkari.portfolio.consultation.dto.ConsultationRequest;
import com.mkondkari.portfolio.consultation.dto.ConsultationResponse;
import com.mkondkari.portfolio.consultation.entity.Consultation;
import com.mkondkari.portfolio.consultation.entity.ConsultationStatus;
import com.mkondkari.portfolio.consultation.mapper.ConsultationMapper;
import com.mkondkari.portfolio.consultation.repository.ConsultationRepository;
import com.mkondkari.portfolio.consultation.service.ConsultationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ConsultationServiceImpl implements ConsultationService {

    private final ConsultationRepository consultationRepository;
    private final ConsultationMapper consultationMapper;

    @Override
    public ConsultationResponse createConsultation(ConsultationRequest request) {

        ConsultationRequest trimmedRequest = trimRequest(request);

        Consultation consultation = consultationMapper.toEntity(trimmedRequest);

        consultation.setStatus(ConsultationStatus.NEW);

        Consultation saved = consultationRepository.save(consultation);

        return consultationMapper.toResponse(saved);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<ConsultationResponse> getAllConsultations(Pageable pageable) {

        return consultationRepository
                .findAll(pageable)
                .map(consultationMapper::toResponse);
    }

    @Override
    @Transactional(readOnly = true)
    public ConsultationResponse getConsultationById(Long id) {

        Consultation consultation = consultationRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Consultation not found with id: " + id
                        ));

        return consultationMapper.toResponse(consultation);
    }

    @Override
    public ConsultationResponse updateConsultationStatus(
            Long id,
            ConsultationStatus status) {

        Consultation consultation = consultationRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Consultation not found with id: " + id
                        ));

        consultation.setStatus(status);

        Consultation updatedConsultation =
                consultationRepository.save(consultation);

        return consultationMapper.toResponse(updatedConsultation);
    }

    @Override
    public void deleteConsultation(Long id) {

        Consultation consultation = consultationRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Consultation not found with id: " + id
                        ));

        consultationRepository.delete(consultation);
    }

    private ConsultationRequest trimRequest(ConsultationRequest request) {

        return ConsultationRequest.builder()
                .fullName(trim(request.getFullName()))
                .email(trim(request.getEmail()))
                .phone(trim(request.getPhone()))
                .company(trim(request.getCompany()))
                .service(trim(request.getService()))
                .message(trim(request.getMessage()))
                .preferredDate(request.getPreferredDate())
                .build();
    }

    private String trim(String value) {
        return value == null ? null : value.trim();
    }
}