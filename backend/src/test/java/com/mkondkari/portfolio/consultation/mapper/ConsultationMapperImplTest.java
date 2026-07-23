package com.mkondkari.portfolio.consultation.mapper;

import com.mkondkari.portfolio.consultation.dto.ConsultationRequest;
import com.mkondkari.portfolio.consultation.dto.ConsultationResponse;
import com.mkondkari.portfolio.consultation.entity.Consultation;
import com.mkondkari.portfolio.consultation.entity.ConsultationStatus;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

class ConsultationMapperImplTest {

    private ConsultationMapper mapper;

    @BeforeEach
    void setUp() {
        mapper = new ConsultationMapperImpl();
    }

    @Test
    void shouldMapRequestToEntity() {

        ConsultationRequest request = ConsultationRequest.builder()
                .fullName("Moshin Kondkari")
                .email("moshin@test.com")
                .phone("9876543210")
                .company("Citi")
                .service("Career Guidance")
                .message("Need guidance")
                .preferredDate(LocalDate.now().plusDays(5))
                .build();

        Consultation entity = mapper.toEntity(request);

        assertNotNull(entity);
        assertEquals(request.getFullName(), entity.getFullName());
        assertEquals(request.getEmail(), entity.getEmail());
        assertEquals(request.getPhone(), entity.getPhone());
        assertEquals(request.getCompany(), entity.getCompany());
        assertEquals(request.getService(), entity.getService());
        assertEquals(request.getMessage(), entity.getMessage());
        assertEquals(
                request.getPreferredDate().atStartOfDay(),
                entity.getPreferredDate(),
                "Preferred date should be mapped to the start of the day"
        );
        assertNull(entity.getId());
        assertNull(entity.getStatus());
        assertNull(entity.getCreatedAt());
        assertNull(entity.getUpdatedAt());
    }

    @Test
    void shouldMapEntityToResponse() {

        LocalDateTime now = LocalDateTime.now();

        Consultation entity = new Consultation();
        entity.setId(1L);
        entity.setFullName("Moshin Kondkari");
        entity.setEmail("moshin@test.com");
        entity.setPhone("9876543210");
        entity.setCompany("Citi");
        entity.setService("Career Guidance");
        entity.setMessage("Need guidance");
        entity.setPreferredDate(now);
        entity.setStatus(ConsultationStatus.NEW);
        entity.setCreatedAt(now);
        entity.setUpdatedAt(now);

        ConsultationResponse response = mapper.toResponse(entity);

        assertNotNull(response);

        assertEquals(entity.getId(), response.getId());
        assertEquals(entity.getFullName(), response.getFullName());
        assertEquals(entity.getEmail(), response.getEmail());
        assertEquals(entity.getPhone(), response.getPhone());
        assertEquals(entity.getCompany(), response.getCompany());
        assertEquals(entity.getService(), response.getService());
        assertEquals(entity.getMessage(), response.getMessage());
        assertEquals(entity.getPreferredDate(), response.getPreferredDate());
        assertEquals(entity.getStatus(), response.getStatus());
        assertEquals(entity.getCreatedAt(), response.getCreatedAt());
        assertEquals(entity.getUpdatedAt(), response.getUpdatedAt());
    }

    @Test
    void shouldReturnNullWhenRequestIsNull() {

        Consultation entity = mapper.toEntity(null);

        assertNull(entity);
    }

    @Test
    void shouldReturnNullWhenEntityIsNull() {

        ConsultationResponse response = mapper.toResponse(null);

        assertNull(response);
    }

    @Test
    void shouldMapRequestToEntityWhenPreferredDateIsNull() {

        ConsultationRequest request = ConsultationRequest.builder()
                .fullName("Moshin Kondkari")
                .email("moshin@test.com")
                .phone("9876543210")
                .company("Citi")
                .service("Career Guidance")
                .message("Need guidance")
                .preferredDate(null)
                .build();

        Consultation entity = mapper.toEntity(request);

        assertNotNull(entity);

        assertEquals(request.getFullName(), entity.getFullName());
        assertEquals(request.getEmail(), entity.getEmail());
        assertEquals(request.getPhone(), entity.getPhone());
        assertEquals(request.getCompany(), entity.getCompany());
        assertEquals(request.getService(), entity.getService());
        assertEquals(request.getMessage(), entity.getMessage());

        // This covers the false branch
        assertNull(entity.getPreferredDate());

        assertNull(entity.getId());
        assertNull(entity.getStatus());
        assertNull(entity.getCreatedAt());
        assertNull(entity.getUpdatedAt());
    }
}