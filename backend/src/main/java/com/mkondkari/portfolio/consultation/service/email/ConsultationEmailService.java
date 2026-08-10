package com.mkondkari.portfolio.consultation.service.email;

import com.mkondkari.portfolio.consultation.dto.ConsultationResponse;
import com.mkondkari.portfolio.consultation.dto.ConsultationServiceResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Map;

@Service
public class ConsultationEmailService {

    private static final String RESEND_API_URL =
            "https://api.resend.com";

    private final RestClient restClient;

    @Value("${resend.api.key}")
    private String resendApiKey;

    @Value("${resend.from.email}")
    private String resendFromEmail;

    public ConsultationEmailService() {
        this.restClient = RestClient.builder()
                .baseUrl(RESEND_API_URL)
                .build();
    }

    /**
     * Sends confirmation email for a newly created consultation.
     */
    public void sendConsultationConfirmation(
            ConsultationResponse consultation
    ) {
        sendEmail(consultation, false);
    }

    /**
     * Sends notification email when an existing consultation is updated.
     */
    public void sendConsultationUpdate(
            ConsultationResponse consultation
    ) {
        sendEmail(consultation, true);
    }

    /**
     * Sends the consultation email through Resend.
     */
    private void sendEmail(
            ConsultationResponse consultation,
            boolean updated
    ) {

        String subject = updated
                ? "Consultation Updated - "
                + consultation.getReferenceNumber()
                : "Consultation Request - "
                + consultation.getReferenceNumber();

        String html = buildHtmlEmail(
                consultation,
                updated
        );

        restClient
                .post()
                .uri("/emails")
                .contentType(MediaType.APPLICATION_JSON)
                .header(
                        "Authorization",
                        "Bearer " + resendApiKey
                )
                .body(
                        Map.of(
                                "from",
                                resendFromEmail,

                                "to",
                                List.of(
                                        consultation.getEmail()
                                ),

                                "subject",
                                subject,

                                "html",
                                html
                        )
                )
                .retrieve()
                .toBodilessEntity();
    }

    /**
     * Builds the HTML email.
     */
    private String buildHtmlEmail(
            ConsultationResponse consultation,
            boolean updated
    ) {

        String title = updated
                ? "Consultation Updated Successfully"
                : "Consultation Submitted Successfully";

        String message = updated
                ? "Your consultation request has been updated successfully. "
                + "Your latest requirements are shown below."
                : "Thank you for booking a consultation. "
                + "Your request has been successfully received.";

        String servicesHtml =
                buildServicesHtml(consultation);

        return """
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport"
                          content="width=device-width, initial-scale=1.0">
                </head>

                <body style="
                    margin:0;
                    padding:0;
                    background-color:#f4f7fb;
                    font-family:Arial,Helvetica,sans-serif;
                    color:#1f2937;
                ">

                <div style="
                    max-width:680px;
                    margin:30px auto;
                    background:#ffffff;
                    border-radius:12px;
                    overflow:hidden;
                    border:1px solid #e5e7eb;
                ">

                    <div style="
                        background:#0369a1;
                        padding:28px 32px;
                        color:#ffffff;
                    ">
                        <h1 style="
                            margin:0;
                            font-size:24px;
                        ">
                            %s
                        </h1>

                        <p style="
                            margin:8px 0 0;
                            color:#cbd5e1;
                            font-size:14px;
                        ">
                            Moshin Kondkari Portfolio
                        </p>
                    </div>

                    <div style="padding:32px;">

                        <p style="
                            font-size:16px;
                            margin-top:0;
                        ">
                            Hello <strong>%s</strong>,
                        </p>

                        <p style="
                            font-size:15px;
                            line-height:1.7;
                            color:#475569;
                        ">
                            %s
                        </p>

                        <div style="
                            margin:24px 0;
                            padding:20px;
                            background:#f8fafc;
                            border:1px solid #e2e8f0;
                            border-radius:10px;
                        ">

                            <div style="
                                font-size:12px;
                                color:#64748b;
                                text-transform:uppercase;
                                letter-spacing:0.5px;
                                margin-bottom:8px;
                            ">
                                Consultation Reference
                            </div>

                            <div style="
                                font-size:20px;
                                font-weight:bold;
                                color:#0f172a;
                            ">
                                %s
                            </div>

                        </div>

                        <div style="
                            margin:20px 0;
                        ">

                            <span style="
                                display:inline-block;
                                padding:8px 16px;
                                border-radius:20px;
                                background:#dcfce7;
                                color:#166534;
                                font-size:13px;
                                font-weight:bold;
                            ">
                                %s
                            </span>

                        </div>

                        <h2 style="
                            font-size:18px;
                            color:#0f172a;
                            margin-top:30px;
                            margin-bottom:14px;
                        ">
                            %s
                        </h2>

                        %s

                        <div style="
                            margin-top:28px;
                            padding:18px;
                            background:#f8fafc;
                            border-left:4px solid #06b6d4;
                            color:#475569;
                            font-size:14px;
                            line-height:1.7;
                        ">
                            %s
                        </div>

                        <p style="
                            margin-top:24px;
                            font-size:14px;
                            color:#475569;
                            line-height:1.7;
                        ">
                            We will contact you within
                            <strong>24–48 hours</strong>.
                        </p>

                        <p style="
                            font-size:14px;
                            color:#64748b;
                        ">
                            Please keep your consultation reference
                            for future communication.
                        </p>

                    </div>

                    <div style="
                        background:#f8fafc;
                        padding:20px 32px;
                        border-top:1px solid #e5e7eb;
                        font-size:13px;
                        color:#64748b;
                    ">
                        Regards,<br>
                        <strong style="color:#334155;">
                            Moshin Kondkari
                        </strong><br>
                        Portfolio
                    </div>

                </div>

                </body>
                </html>
                """
                .formatted(
                        title,
                        consultation.getFirstName(),
                        message,
                        consultation.getReferenceNumber(),
                        formatStatus(
                                consultation.getStatus().name()
                        ),
                        updated
                                ? "Current Consultation Services"
                                : "Services Selected",
                        servicesHtml,
                        updated
                                ? "Your updated requirements have been recorded "
                                + "and our team will review them."
                                : "Your consultation request has been securely "
                                + "recorded and our team will review your requirements."
                );
    }

    /**
     * Builds the selected consultation services section.
     */
    private String buildServicesHtml(
            ConsultationResponse consultation
    ) {

        if (
                consultation.getConsultationServices() == null
                        || consultation.getConsultationServices().isEmpty()
        ) {

            return """
                    <div style="
                        padding:16px;
                        background:#f8fafc;
                        border:1px solid #e2e8f0;
                        border-radius:8px;
                        color:#64748b;
                    ">
                        No services selected.
                    </div>
                    """;
        }

        StringBuilder html =
                new StringBuilder();

        for (
                ConsultationServiceResponse service
                : consultation.getConsultationServices()
        ) {

            html.append("""
                    <div style="
                        margin-bottom:14px;
                        padding:16px;
                        background:#f8fafc;
                        border:1px solid #e2e8f0;
                        border-radius:8px;
                    ">
                    """);

            html.append("""
                    <div style="
                        font-weight:bold;
                        color:#0f172a;
                        margin-bottom:8px;
                    ">
                    """);

            html.append(
                    formatLabel(service.getCategory())
            );

            html.append("""
                    </div>
                    """);

            if (
                    service.getTopics() != null
                            && !service.getTopics().isEmpty()
            ) {

                html.append("""
                        <ul style="
                            margin:6px 0 0;
                            padding-left:20px;
                            color:#475569;
                        ">
                        """);

                for (
                        String topic
                        : service.getTopics()
                ) {

                    html.append(
                                    "<li style=\"margin-bottom:5px;\">"
                            )
                            .append(formatLabel(topic))
                            .append("</li>");
                }

                html.append("</ul>");
            }

            html.append("</div>");
        }

        return html.toString();
    }

    /**
     * Formats a status such as IN_PROGRESS to In Progress.
     */
    private String formatStatus(
            String status
    ) {
        return formatLabel(status);
    }

    /**
     * Converts enum/string values into readable labels.
     */
    private String formatLabel(
            String value
    ) {

        if (value == null || value.isBlank()) {
            return "";
        }

        String[] words =
                value
                        .toLowerCase()
                        .replace("_", "-")
                        .split("-");

        StringBuilder result =
                new StringBuilder();

        for (String word : words) {

            if (word.isBlank()) {
                continue;
            }

            if (!result.isEmpty()) {
                result.append(" ");
            }

            result.append(
                    Character.toUpperCase(word.charAt(0))
            );

            if (word.length() > 1) {
                result.append(
                        word.substring(1)
                );
            }
        }

        return result.toString();
    }
}