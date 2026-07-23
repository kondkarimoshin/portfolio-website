package com.mkondkari.portfolio.consultation.dto;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

class ConsultationRequestTest {

    private Validator validator;

    @BeforeEach
    void setUp() {
        try (ValidatorFactory factory = Validation.buildDefaultValidatorFactory()) {
            validator = factory.getValidator();
        }
    }

    @Test
    void shouldPassValidationForValidRequest() {

        ConsultationRequest request = ConsultationRequest.builder()
                .fullName("Moshin Kondkari")
                .email("mkondkari@gmail.com")
                .phone("9029326353")
                .company("Citi")
                .service("Career Guidance")
                .message("Need guidance on automation.")
                .preferredDate(LocalDate.now().plusDays(1))
                .build();

        Set<ConstraintViolation<ConsultationRequest>> violations =
                validator.validate(request);

        assertTrue(violations.isEmpty());
    }

    @Test
    void shouldFailWhenFullNameIsBlank() {

        ConsultationRequest request = ConsultationRequest.builder()
                .fullName("")
                .email("mkondkari@gmail.com")
                .service("Career Guidance")
                .message("Need guidance")
                .preferredDate(LocalDate.now().plusDays(1))
                .build();

        Set<ConstraintViolation<ConsultationRequest>> violations =
                validator.validate(request);

        assertFalse(violations.isEmpty());
    }

    @Test
    void shouldFailWhenEmailIsInvalid() {

        ConsultationRequest request = ConsultationRequest.builder()
                .fullName("Moshin")
                .email("invalid-email")
                .service("Career Guidance")
                .message("Need guidance")
                .preferredDate(LocalDate.now().plusDays(1))
                .build();

        Set<ConstraintViolation<ConsultationRequest>> violations =
                validator.validate(request);

        assertFalse(violations.isEmpty());
    }

    @Test
    void shouldFailWhenServiceIsBlank() {

        ConsultationRequest request = ConsultationRequest.builder()
                .fullName("Moshin")
                .email("mkondkari@gmail.com")
                .service("")
                .message("Need guidance")
                .preferredDate(LocalDate.now().plusDays(1))
                .build();

        Set<ConstraintViolation<ConsultationRequest>> violations =
                validator.validate(request);

        assertFalse(violations.isEmpty());
    }

    @Test
    void shouldFailWhenPreferredDateIsInPast() {

        ConsultationRequest request = ConsultationRequest.builder()
                .fullName("Moshin")
                .email("mkondkari@gmail.com")
                .service("Career Guidance")
                .message("Need guidance")
                .preferredDate(LocalDate.now().minusDays(1))
                .build();

        Set<ConstraintViolation<ConsultationRequest>> violations =
                validator.validate(request);

        assertFalse(violations.isEmpty());
    }
}