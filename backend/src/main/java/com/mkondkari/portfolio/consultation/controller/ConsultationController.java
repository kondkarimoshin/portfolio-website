package com.mkondkari.portfolio.consultation.controller;

import com.mkondkari.portfolio.common.constants.ApiConstants;
import com.mkondkari.portfolio.consultation.dto.ConsultationRequest;
import com.mkondkari.portfolio.consultation.dto.ConsultationResponse;
import com.mkondkari.portfolio.consultation.entity.ConsultationStatus;
import com.mkondkari.portfolio.consultation.service.ConsultationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(
        name = "Consultation Management",
        description = "APIs for managing consultation requests"
)
@RestController
@RequestMapping(ApiConstants.API_V1 + "/consultations")
@RequiredArgsConstructor
public class ConsultationController {

    private final ConsultationService consultationService;

    @Operation(
            summary = "Create a consultation request",
            description = "Creates a new consultation request submitted from the Portfolio website."
    )
    @ApiResponse(responseCode = "201", description = "Consultation created successfully")
    @ApiResponse(responseCode = "400", description = "Validation failed")
    @PostMapping(
            consumes = "application/json",
            produces = "application/json"
    )
    public ResponseEntity<ConsultationResponse> createConsultation(
            @Valid @RequestBody ConsultationRequest request) {

        ConsultationResponse response =
                consultationService.createConsultation(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }


    @Operation(
            summary = "Get all consultation requests",
            description = "Returns all consultation requests stored in the system."
    )
    @ApiResponse(responseCode = "200", description = "Consultations retrieved successfully")
    @GetMapping(produces = "application/json")
    public ResponseEntity<Page<ConsultationResponse>> getAllConsultations(

            @PageableDefault(
                    size = 20,
                    sort = "createdAt",
                    direction = Sort.Direction.DESC
            )
            Pageable pageable) {

        return ResponseEntity.ok(
                consultationService.getAllConsultations(pageable)
        );
    }

    @Operation(
            summary = "Get consultation by email",
            description = "Returns the existing consultation request for the provided email."
    )
    @ApiResponse(responseCode = "200", description = "Consultation found")
    @ApiResponse(responseCode = "404", description = "Consultation not found")
    @GetMapping(
            value = "/by-email",
            produces = "application/json"
    )
    public ResponseEntity<ConsultationResponse> getConsultationByEmail(
            @RequestParam String email) {

        return ResponseEntity.ok(
                consultationService.getConsultationByEmail(email)
        );
    }

    @Operation(
            summary = "Get consultation by ID",
            description = "Returns a consultation request by its unique identifier."
    )
    @ApiResponse(responseCode = "200", description = "Consultation retrieved successfully")
    @ApiResponse(responseCode = "404", description = "Consultation not found")
    @GetMapping(
            value = "/{id}",
            produces = "application/json"
    )
    public ResponseEntity<ConsultationResponse> getConsultationById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                consultationService.getConsultationById(id)
        );
    }

    @Operation(
            summary = "Update consultation",
            description = "Updates an existing consultation request."
    )
    @ApiResponse(responseCode = "200", description = "Consultation updated successfully")
    @ApiResponse(responseCode = "404", description = "Consultation not found")
    @PutMapping(
            value = "/{id}",
            consumes = "application/json",
            produces = "application/json"
    )
    public ResponseEntity<ConsultationResponse> updateConsultation(
            @PathVariable Long id,
            @Valid @RequestBody ConsultationRequest request) {

        return ResponseEntity.ok(
                consultationService.updateConsultation(id, request)
        );
    }

    @Operation(
            summary = "Update consultation status",
            description = "Updates the status of an existing consultation request."
    )
    @ApiResponse(responseCode = "200", description = "Consultation status updated successfully")
    @ApiResponse(responseCode = "404", description = "Consultation not found")
    @PatchMapping(
            value = "/{id}/status",
            produces = "application/json"
    )
    public ResponseEntity<ConsultationResponse> updateConsultationStatus(
            @PathVariable Long id,
            @RequestParam ConsultationStatus status) {

        return ResponseEntity.ok(
                consultationService.updateConsultationStatus(id, status)
        );
    }

    @Operation(
            summary = "Delete consultation",
            description = "Deletes a consultation request by its unique identifier."
    )
    @ApiResponse(responseCode = "204", description = "Consultation deleted successfully")
    @ApiResponse(responseCode = "404", description = "Consultation not found")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteConsultation(
            @PathVariable Long id) {

        consultationService.deleteConsultation(id);

        return ResponseEntity.noContent().build();
    }
}