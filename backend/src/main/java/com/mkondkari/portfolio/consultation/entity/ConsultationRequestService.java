package com.mkondkari.portfolio.consultation.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(
        name = "consultation_services",
        indexes = {
                @Index(
                        name = "idx_consultation_services_consultation_id",
                        columnList = "consultation_id"
                )
        }
)
public class ConsultationRequestService {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String category;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "consultation_id", nullable = false)
    private Consultation consultation;

    @OneToMany(
            mappedBy = "consultationService",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<ConsultationTopic> topics = new ArrayList<>();

    @CreatedDate
    @Column(
            name = "created_at",
            nullable = false,
            updatable = false
    )
    private OffsetDateTime createdAt;

    public void addTopic(ConsultationTopic topic) {
        topics.add(topic);
        topic.setConsultationService(this);
    }

    public void removeTopic(ConsultationTopic topic) {
        topics.remove(topic);
        topic.setConsultationService(null);
    }
}