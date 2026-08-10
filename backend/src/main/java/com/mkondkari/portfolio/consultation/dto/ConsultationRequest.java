package com.mkondkari.portfolio.consultation.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsultationRequest {

    @NotBlank(message = "Email is required")
    @Email(message = "Please provide a valid email address")
    @Size(max = 150, message = "Email cannot exceed 150 characters")
    private String email;

    @NotBlank(message = "First name is required")
    @Size(max = 100, message = "First name cannot exceed 100 characters")
    private String firstName;

    @Size(max = 100, message = "Last name cannot exceed 100 characters")
    private String lastName;

    @Size(max = 20, message = "Phone number cannot exceed 20 characters")
    @Pattern(
            regexp = "^[+0-9()\\-\\s]*$",
            message = "Phone number contains invalid characters"
    )
    private String phone;

    @Size(max = 5000, message = "Additional details cannot exceed 5000 characters")
    private String additionalDetails;

    @Valid
    @Builder.Default
    private List<ConsultationServiceRequest> consultationServices = new ArrayList<>();
}