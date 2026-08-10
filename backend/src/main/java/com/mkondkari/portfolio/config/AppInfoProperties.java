package com.mkondkari.portfolio.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app")
public record AppInfoProperties(
        String name,
        String version,
        String description
) {
}