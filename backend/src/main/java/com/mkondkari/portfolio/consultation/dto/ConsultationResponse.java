package com.mkondkari.portfolio.consultation.dto;

import com.mkondkari.portfolio.consultation.entity.ConsultationStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsultationResponse {

    private Long id;

    private String fullName;

    private String email;

    private String phone;

    private String company;

    private String service;

    private String message;

    private LocalDateTime preferredDate;

    private ConsultationStatus status;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}