package com.mkondkari.portfolio.config;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class OpenApiConfig {

    private final AppInfoProperties appInfoProperties;

    @Bean
    public OpenAPI portfolioOpenAPI() {

        return new OpenAPI()
                .info(new Info()
                        .title("Portfolio Backend API")
                        .description("""
                                Enterprise backend APIs for the Portfolio Website.

                                Current Modules:
                                - Consultation Management

                                Planned Modules:
                                - Contact Management
                                - Authentication & Authorization
                                - Admin Dashboard
                                """)
                        .version(appInfoProperties.version())
                        .contact(new Contact()
                                .name("Moshin Kondkari")
                                .email("kondkarimoshin@gmail.com")
                                .url("https://github.com/mkondkari"))
                        .license(new License()
                                .name("MIT License")
                                .url("https://opensource.org/licenses/MIT")))
                .externalDocs(new ExternalDocumentation()
                        .description("Project Repository")
                        .url("https://github.com/mkondkari/portfolio-website"));
    }
}