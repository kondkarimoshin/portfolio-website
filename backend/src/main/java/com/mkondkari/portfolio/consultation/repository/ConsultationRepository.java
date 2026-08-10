package com.mkondkari.portfolio.consultation.repository;

import com.mkondkari.portfolio.consultation.entity.Consultation;
import com.mkondkari.portfolio.consultation.entity.ConsultationStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ConsultationRepository extends JpaRepository<Consultation, Long> {

    Optional<Consultation> findByEmailIgnoreCase(String email);

    boolean existsByEmailIgnoreCaseAndStatus(
            String email,
            ConsultationStatus status
    );
}