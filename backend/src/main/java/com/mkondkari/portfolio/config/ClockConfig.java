package com.mkondkari.portfolio.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Clock;
import java.time.ZoneId;

@Configuration
public class ClockConfig {

    public static final String APPLICATION_TIME_ZONE = "Asia/Kolkata";

    @Bean
    public Clock applicationClock() {
        return Clock.system(ZoneId.of(APPLICATION_TIME_ZONE));
    }
}