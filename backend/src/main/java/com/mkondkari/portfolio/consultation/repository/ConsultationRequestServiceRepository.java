package com.mkondkari.portfolio.consultation.repository;

import com.mkondkari.portfolio.consultation.entity.ConsultationRequestService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultationRequestServiceRepository
        extends JpaRepository<ConsultationRequestService, Long> {
}