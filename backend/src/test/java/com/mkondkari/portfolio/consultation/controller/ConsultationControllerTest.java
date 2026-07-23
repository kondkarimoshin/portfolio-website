
package com.mkondkari.portfolio.consultation.controller;

import com.mkondkari.portfolio.common.exception.BusinessException;
import com.mkondkari.portfolio.common.exception.ResourceNotFoundException;
import com.mkondkari.portfolio.config.ClockConfig;
import com.mkondkari.portfolio.consultation.dto.*;
import com.mkondkari.portfolio.consultation.entity.ConsultationStatus;
import com.mkondkari.portfolio.consultation.service.ConsultationService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import tools.jackson.databind.ObjectMapper;

import java.time.LocalDate;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ConsultationController.class)
@Import(ClockConfig.class)
class ConsultationControllerTest {

    @Autowired MockMvc mockMvc;
    @Autowired ObjectMapper objectMapper;
    @MockitoBean ConsultationService consultationService;

    private ConsultationRequest request(){
        return ConsultationRequest.builder()
                .fullName("Moshin Kondkari")
                .email("moshin@test.com")
                .phone("9876543210")
                .company("Citi")
                .service("Career Guidance")
                .message("Need guidance")
                .preferredDate(LocalDate.now().plusDays(5))
                .build();
    }

    private ConsultationResponse response(){
        return ConsultationResponse.builder()
                .id(1L).fullName("Moshin Kondkari")
                .email("moshin@test.com")
                .status(ConsultationStatus.NEW)
                .build();
    }

    @Test
    void shouldCreateConsultation() throws Exception{
        when(consultationService.createConsultation(any())).thenReturn(response());
        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request())))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1));
    }

    @Test
    void shouldReturn400WhenValidationFails() throws Exception{
        ConsultationRequest r=request(); r.setFullName("");
        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(r)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void shouldReturnConsultationById() throws Exception{
        when(consultationService.getConsultationById(1L)).thenReturn(response());
        mockMvc.perform(get("/api/v1/consultations/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1));
    }

    @Test
    void shouldReturnAllConsultations() throws Exception{
        when(consultationService.getAllConsultations(any()))
                .thenReturn(new PageImpl<>(List.of(response())));
        mockMvc.perform(get("/api/v1/consultations"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content[0].id").value(1));
    }

    @Test
    void shouldUpdateStatus() throws Exception{
        ConsultationResponse res=response();
        res.setStatus(ConsultationStatus.COMPLETED);
        when(consultationService.updateConsultationStatus(1L,ConsultationStatus.COMPLETED)).thenReturn(res);
        mockMvc.perform(patch("/api/v1/consultations/1/status").param("status","COMPLETED"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("COMPLETED"));
    }

    @Test
    void shouldDeleteConsultation() throws Exception{
        doNothing().when(consultationService).deleteConsultation(1L);
        mockMvc.perform(delete("/api/v1/consultations/1"))
                .andExpect(status().isNoContent());
        verify(consultationService).deleteConsultation(1L);
    }

    @Test
    void shouldReturn400WhenEmailIsBlank() throws Exception {

        ConsultationRequest request = request();
        request.setEmail("");

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.message").value("Validation failed."));
    }

    @Test
    void shouldReturn400WhenEmailIsInvalid() throws Exception {

        ConsultationRequest request = request();
        request.setEmail("invalid-email");

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.message").value("Validation failed."));
    }

    @Test
    void shouldReturn400WhenMessageIsBlank() throws Exception {

        ConsultationRequest request = request();
        request.setMessage("");

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void shouldReturn400WhenPreferredDateIsPast() throws Exception {

        ConsultationRequest request = request();
        request.setPreferredDate(LocalDate.now().minusDays(1));

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void shouldReturnEmptyConsultationList() throws Exception {

        when(consultationService.getAllConsultations(any()))
                .thenReturn(new PageImpl<>(List.of()));

        mockMvc.perform(get("/api/v1/consultations"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content").isEmpty());
    }

    @Test
    void shouldInvokeDeleteServiceOnlyOnce() throws Exception {

        doNothing().when(consultationService).deleteConsultation(1L);

        mockMvc.perform(delete("/api/v1/consultations/1"))
                .andExpect(status().isNoContent());

        verify(consultationService, times(1)).deleteConsultation(1L);
        verifyNoMoreInteractions(consultationService);
    }

    @Test
    void shouldUpdateStatusToScheduled() throws Exception {

        ConsultationResponse response = response();
        response.setStatus(ConsultationStatus.SCHEDULED);

        when(consultationService.updateConsultationStatus(
                1L,
                ConsultationStatus.SCHEDULED))
                .thenReturn(response);

        mockMvc.perform(
                        patch("/api/v1/consultations/1/status")
                                .param("status", "SCHEDULED"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("SCHEDULED"));
    }

    @Test
    void shouldUpdateStatusToCancelled() throws Exception {

        ConsultationResponse response = response();
        response.setStatus(ConsultationStatus.CANCELLED);

        when(consultationService.updateConsultationStatus(
                1L,
                ConsultationStatus.CANCELLED))
                .thenReturn(response);

        mockMvc.perform(
                        patch("/api/v1/consultations/1/status")
                                .param("status", "CANCELLED"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("CANCELLED"));
    }

    @Test
    void shouldReturn400WhenRequestBodyIsMissing() throws Exception {

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    void shouldReturn404WhenConsultationNotFound() throws Exception {

        when(consultationService.getConsultationById(99L))
                .thenThrow(new ResourceNotFoundException("Consultation not found with id: 99"));

        mockMvc.perform(get("/api/v1/consultations/99"))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.status").value(404))
                .andExpect(jsonPath("$.error").value("Not Found"))
                .andExpect(jsonPath("$.message").value("Consultation not found with id: 99"));
    }

    @Test
    void shouldReturn404WhenDeletingUnknownConsultation() throws Exception {

        doThrow(new ResourceNotFoundException("Consultation not found with id: 99"))
                .when(consultationService)
                .deleteConsultation(99L);

        mockMvc.perform(delete("/api/v1/consultations/99"))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.status").value(404))
                .andExpect(jsonPath("$.error").value("Not Found"));
    }

    @Test
    void shouldReturn404WhenUpdatingUnknownConsultation() throws Exception {

        when(consultationService.updateConsultationStatus(
                99L,
                ConsultationStatus.COMPLETED))
                .thenThrow(new ResourceNotFoundException("Consultation not found with id: 99"));

        mockMvc.perform(
                        patch("/api/v1/consultations/99/status")
                                .param("status", "COMPLETED"))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.status").value(404))
                .andExpect(jsonPath("$.error").value("Not Found"));
    }

    @Test
    void shouldReturn400WhenBusinessExceptionOccurs() throws Exception {

        when(consultationService.createConsultation(any()))
                .thenThrow(new BusinessException("Consultation already exists") {});

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request())))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.status").value(400))
                .andExpect(jsonPath("$.error").value("Bad Request"))
                .andExpect(jsonPath("$.message").value("Consultation already exists"));
    }

    @Test
    void shouldReturn500WhenUnexpectedExceptionOccurs() throws Exception {

        when(consultationService.createConsultation(any()))
                .thenThrow(new RuntimeException("Database connection lost"));

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request())))
                .andExpect(status().isInternalServerError())
                .andExpect(jsonPath("$.status").value(500))
                .andExpect(jsonPath("$.error").value("Internal Server Error"))
                .andExpect(jsonPath("$.message").value("An unexpected error occurred."));
    }

    @Test
    void shouldReturn400WhenInvalidStatusEnumIsPassed() throws Exception {

        mockMvc.perform(
                        patch("/api/v1/consultations/1/status")
                                .param("status", "INVALID_STATUS"))
                .andExpect(status().isBadRequest());
    }

    @Test
    void shouldSupportPaginationParameters() throws Exception {

        when(consultationService.getAllConsultations(any()))
                .thenReturn(new PageImpl<>(List.of(response())));

        mockMvc.perform(get("/api/v1/consultations")
                        .param("page", "0")
                        .param("size", "10")
                        .param("sort", "createdAt,desc"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content[0].id").value(1));

        verify(consultationService).getAllConsultations(any());
    }

    @Test
    void shouldVerifyCreateConsultationServiceInvocation() throws Exception {

        when(consultationService.createConsultation(any()))
                .thenReturn(response());

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request())))
                .andExpect(status().isCreated());

        verify(consultationService, times(1))
                .createConsultation(any());

        verifyNoMoreInteractions(consultationService);
    }

    @Test
    void shouldReturn400WhenFullNameExceedsMaxLength() throws Exception {

        ConsultationRequest request = request();
        request.setFullName("A".repeat(101));

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void shouldReturn400WhenEmailExceedsMaxLength() throws Exception {

        ConsultationRequest request = request();
        request.setEmail("a".repeat(145) + "@test.com");

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void shouldReturn400WhenCompanyExceedsMaxLength() throws Exception {

        ConsultationRequest request = request();
        request.setCompany("A".repeat(151));

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void shouldReturn400WhenPhoneExceedsMaxLength() throws Exception {

        ConsultationRequest request = request();
        request.setPhone("1".repeat(21));

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void shouldReturn400WhenServiceExceedsMaxLength() throws Exception {

        ConsultationRequest request = request();
        request.setService("A".repeat(101));

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void shouldAcceptRequestWithoutCompany() throws Exception {

        ConsultationRequest request = request();
        request.setCompany(null);

        when(consultationService.createConsultation(any()))
                .thenReturn(response());

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated());
    }

    @Test
    void shouldAcceptRequestWithoutPhone() throws Exception {

        ConsultationRequest request = request();
        request.setPhone(null);

        when(consultationService.createConsultation(any()))
                .thenReturn(response());

        mockMvc.perform(post("/api/v1/consultations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated());
    }

    @Test
    void shouldSupportSecondPagePagination() throws Exception {

        when(consultationService.getAllConsultations(any()))
                .thenReturn(new PageImpl<>(List.of(response())));

        mockMvc.perform(get("/api/v1/consultations")
                        .param("page", "1")
                        .param("size", "5"))
                .andExpect(status().isOk());

        verify(consultationService).getAllConsultations(any());
    }

    @Test
    void shouldUpdateStatusToInProgress() throws Exception {

        ConsultationResponse response = response();
        response.setStatus(ConsultationStatus.IN_PROGRESS);

        when(consultationService.updateConsultationStatus(
                1L,
                ConsultationStatus.IN_PROGRESS))
                .thenReturn(response);

        mockMvc.perform(
                        patch("/api/v1/consultations/1/status")
                                .param("status", "IN_PROGRESS"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("IN_PROGRESS"));
    }

    @Test
    void shouldUpdateStatusToNew() throws Exception {

        ConsultationResponse response = response();
        response.setStatus(ConsultationStatus.NEW);

        when(consultationService.updateConsultationStatus(
                1L,
                ConsultationStatus.NEW))
                .thenReturn(response);

        mockMvc.perform(
                        patch("/api/v1/consultations/1/status")
                                .param("status", "NEW"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("NEW"));
    }

}
