package com.mkondkari.portfolio.consultation.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
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
        name = "consultations",
        indexes = {
                @Index(name = "idx_consultation_status", columnList = "status"),
                @Index(name = "idx_consultation_created_at", columnList = "created_at"),
                @Index(name = "idx_consultation_email", columnList = "email")
        }
)
public class Consultation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String email;

    @Column(name = "first_name", nullable = false, length = 100)
    private String firstName;

    @Column(name = "last_name", length = 100)
    private String lastName;

    @Column(length = 20)
    private String phone;

    @Column(name = "additional_details", columnDefinition = "TEXT")
    private String additionalDetails;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private ConsultationStatus status;

    @OneToMany(
            mappedBy = "consultation",
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.LAZY
    )
    private List<ConsultationRequestService> consultationServices = new ArrayList<>();

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private OffsetDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private OffsetDateTime updatedAt;

    @Column(
            name = "reference_number",
            unique = true,
            length = 30
    )
    private String referenceNumber;
}