package com.mkondkari.portfolio.consultation.dto;

import com.mkondkari.portfolio.consultation.entity.ConsultationStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsultationResponse {

    private Long id;

    private String referenceNumber;

    private String email;

    private String firstName;

    private String lastName;

    private String phone;

    private String additionalDetails;

    @Builder.Default
    private List<ConsultationServiceResponse> consultationServices = new ArrayList<>();

    private ConsultationStatus status;

    private OffsetDateTime createdAt;

    private OffsetDateTime updatedAt;
}