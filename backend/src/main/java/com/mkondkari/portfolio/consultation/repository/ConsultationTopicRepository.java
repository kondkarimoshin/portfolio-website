package com.mkondkari.portfolio.consultation.repository;

import com.mkondkari.portfolio.consultation.entity.ConsultationTopic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultationTopicRepository
        extends JpaRepository<ConsultationTopic, Long> {
}