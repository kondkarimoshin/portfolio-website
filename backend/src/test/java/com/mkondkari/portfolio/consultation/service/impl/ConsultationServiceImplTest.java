package com.mkondkari.portfolio.consultation.service.impl;

import com.mkondkari.portfolio.common.exception.ResourceNotFoundException;
import com.mkondkari.portfolio.consultation.dto.ConsultationRequest;
import com.mkondkari.portfolio.consultation.dto.ConsultationResponse;
import com.mkondkari.portfolio.consultation.entity.Consultation;
import com.mkondkari.portfolio.consultation.entity.ConsultationStatus;
import com.mkondkari.portfolio.consultation.mapper.ConsultationMapper;
import com.mkondkari.portfolio.consultation.repository.ConsultationRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ConsultationServiceImplTest {

    @Mock
    private ConsultationRepository consultationRepository;

    @Mock
    private ConsultationMapper consultationMapper;

    @InjectMocks
    private ConsultationServiceImpl consultationService;

    @Test
    void shouldCreateConsultationSuccessfully() {

        ConsultationRequest request = ConsultationRequest.builder()
                .fullName("Moshin Kondkari")
                .email("moshin@test.com")
                .phone("9876543210")
                .company("Citi")
                .service("Career Guidance")
                .message("Need career guidance")
                .preferredDate(LocalDate.now().plusDays(5))
                .build();

        Consultation consultation = new Consultation();

        Consultation savedConsultation = new Consultation();
        savedConsultation.setId(1L);
        savedConsultation.setStatus(ConsultationStatus.NEW);

        ConsultationResponse response = ConsultationResponse.builder()
                .id(1L)
                .fullName("Moshin Kondkari")
                .status(ConsultationStatus.NEW)
                .build();

        when(consultationMapper.toEntity(request)).thenReturn(consultation);

        when(consultationRepository.save(consultation))
                .thenReturn(savedConsultation);

        when(consultationMapper.toResponse(savedConsultation))
                .thenReturn(response);

        ConsultationResponse result =
                consultationService.createConsultation(request);

        assertNotNull(result);
        assertEquals(1L, result.getId());
        assertEquals(ConsultationStatus.NEW, result.getStatus());

        verify(consultationMapper).toEntity(request);
        verify(consultationRepository).save(consultation);
        verify(consultationMapper).toResponse(savedConsultation);
    }

    @Test
    void shouldReturnAllConsultations() {

        Consultation consultation = new Consultation();
        consultation.setId(1L);

        ConsultationResponse response = ConsultationResponse.builder()
                .id(1L)
                .fullName("Moshin Kondkari")
                .status(ConsultationStatus.NEW)
                .build();

        PageRequest pageable = PageRequest.of(0, 10);

        Page<Consultation> consultationPage =
                new PageImpl<>(List.of(consultation));

        when(consultationRepository.findAll(pageable))
                .thenReturn(consultationPage);

        when(consultationMapper.toResponse(consultation))
                .thenReturn(response);

        Page<ConsultationResponse> result =
                consultationService.getAllConsultations(pageable);

        assertNotNull(result);
        assertEquals(1, result.getTotalElements());
        assertEquals("Moshin Kondkari",
                result.getContent().getFirst().getFullName());

        verify(consultationRepository).findAll(pageable);
        verify(consultationMapper).toResponse(consultation);
    }

    @Test
    void shouldReturnConsultationById() {

        Long consultationId = 1L;

        Consultation consultation = new Consultation();
        consultation.setId(consultationId);

        ConsultationResponse response = ConsultationResponse.builder()
                .id(consultationId)
                .fullName("Moshin Kondkari")
                .status(ConsultationStatus.NEW)
                .build();

        when(consultationRepository.findById(consultationId))
                .thenReturn(Optional.of(consultation));

        when(consultationMapper.toResponse(consultation))
                .thenReturn(response);

        ConsultationResponse result =
                consultationService.getConsultationById(consultationId);

        assertNotNull(result);
        assertEquals(consultationId, result.getId());
        assertEquals("Moshin Kondkari", result.getFullName());

        verify(consultationRepository).findById(consultationId);
        verify(consultationMapper).toResponse(consultation);
    }

    @Test
    void shouldThrowExceptionWhenConsultationNotFound() {

        Long consultationId = 100L;

        when(consultationRepository.findById(consultationId))
                .thenReturn(Optional.empty());

        ResourceNotFoundException exception =
                assertThrows(
                        ResourceNotFoundException.class,
                        () -> consultationService.getConsultationById(consultationId)
                );

        assertEquals(
                "Consultation not found with id: 100",
                exception.getMessage()
        );

        verify(consultationRepository).findById(consultationId);
        verifyNoInteractions(consultationMapper);
    }

    @Test
    void shouldUpdateConsultationStatusSuccessfully() {

        Long consultationId = 1L;

        Consultation consultation = new Consultation();
        consultation.setId(consultationId);
        consultation.setStatus(ConsultationStatus.NEW);

        Consultation updatedConsultation = new Consultation();
        updatedConsultation.setId(consultationId);
        updatedConsultation.setStatus(ConsultationStatus.SCHEDULED);

        ConsultationResponse response = ConsultationResponse.builder()
                .id(consultationId)
                .status(ConsultationStatus.SCHEDULED)
                .build();

        when(consultationRepository.findById(consultationId))
                .thenReturn(Optional.of(consultation));

        when(consultationRepository.save(consultation))
                .thenReturn(updatedConsultation);

        when(consultationMapper.toResponse(updatedConsultation))
                .thenReturn(response);

        ConsultationResponse result =
                consultationService.updateConsultationStatus(
                        consultationId,
                        ConsultationStatus.SCHEDULED);

        assertNotNull(result);
        assertEquals(
                ConsultationStatus.SCHEDULED,
                result.getStatus());

        verify(consultationRepository).findById(consultationId);
        verify(consultationRepository).save(consultation);
        verify(consultationMapper).toResponse(updatedConsultation);
    }

    @Test
    void shouldThrowExceptionWhenUpdatingNonExistingConsultation() {

        Long consultationId = 100L;

        when(consultationRepository.findById(consultationId))
                .thenReturn(Optional.empty());

        ResourceNotFoundException exception =
                assertThrows(
                        ResourceNotFoundException.class,
                        () -> consultationService.updateConsultationStatus(
                                consultationId,
                                ConsultationStatus.SCHEDULED));

        assertEquals(
                "Consultation not found with id: 100",
                exception.getMessage());

        verify(consultationRepository).findById(consultationId);
        verifyNoMoreInteractions(consultationRepository);
        verifyNoInteractions(consultationMapper);
    }

    @Test
    void shouldDeleteConsultationSuccessfully() {

        Long consultationId = 1L;

        Consultation consultation = new Consultation();
        consultation.setId(consultationId);

        when(consultationRepository.findById(consultationId))
                .thenReturn(Optional.of(consultation));

        consultationService.deleteConsultation(consultationId);

        verify(consultationRepository).findById(consultationId);
        verify(consultationRepository).delete(consultation);
    }

    @Test
    void shouldThrowExceptionWhenDeletingNonExistingConsultation() {

        Long consultationId = 100L;

        when(consultationRepository.findById(consultationId))
                .thenReturn(Optional.empty());

        ResourceNotFoundException exception =
                assertThrows(
                        ResourceNotFoundException.class,
                        () -> consultationService.deleteConsultation(consultationId));

        assertEquals(
                "Consultation not found with id: 100",
                exception.getMessage());

        verify(consultationRepository).findById(consultationId);
        verify(consultationRepository, never()).delete(any());
    }
}