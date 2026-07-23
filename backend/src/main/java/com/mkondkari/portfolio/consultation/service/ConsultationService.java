package com.mkondkari.portfolio.consultation.service;

import com.mkondkari.portfolio.consultation.dto.ConsultationRequest;
import com.mkondkari.portfolio.consultation.dto.ConsultationResponse;
import com.mkondkari.portfolio.consultation.entity.ConsultationStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ConsultationService {

    ConsultationResponse createConsultation(ConsultationRequest request);

    Page<ConsultationResponse> getAllConsultations(Pageable pageable);

    ConsultationResponse getConsultationById(Long id);

    ConsultationResponse updateConsultationStatus(
            Long id,
            ConsultationStatus status
    );

    void deleteConsultation(Long id);
}