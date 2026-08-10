package com.mkondkari.portfolio.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.auditing.DateTimeProvider;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.time.Clock;
import java.time.OffsetDateTime;
import java.util.Optional;

@Configuration
@EnableJpaAuditing(dateTimeProviderRef = "auditingDateTimeProvider")
public class JpaAuditConfig {

    @Bean
    public DateTimeProvider auditingDateTimeProvider(
            Clock applicationClock
    ) {
        return () -> Optional.of(
                OffsetDateTime.now(applicationClock)
        );
    }
}