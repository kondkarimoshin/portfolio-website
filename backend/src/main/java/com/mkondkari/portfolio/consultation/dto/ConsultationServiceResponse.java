package com.mkondkari.portfolio.consultation.dto;

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
public class ConsultationServiceResponse {

    private String category;

    @Builder.Default
    private List<String> topics = new ArrayList<>();
}