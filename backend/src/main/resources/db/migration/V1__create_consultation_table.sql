CREATE TABLE consultations (
    id BIGSERIAL PRIMARY KEY,

    email VARCHAR(150) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100),
    phone VARCHAR(20),

    additional_details TEXT,

    status VARCHAR(30) NOT NULL DEFAULT 'PENDING'
        CHECK (status IN (
            'PENDING',
            'IN_REVIEW',
            'SCHEDULED',
            'IN_PROGRESS',
            'COMPLETED',
            'CANCELLED'
        )),

    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE consultation_services (
    id BIGSERIAL PRIMARY KEY,

    consultation_id BIGINT NOT NULL,

    category VARCHAR(100) NOT NULL,

    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_consultation_services_consultation
        FOREIGN KEY (consultation_id)
        REFERENCES consultations(id)
        ON DELETE CASCADE
);

CREATE TABLE consultation_topics (
    id BIGSERIAL PRIMARY KEY,

    consultation_service_id BIGINT NOT NULL,

    topic VARCHAR(100) NOT NULL,

    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_consultation_topics_service
        FOREIGN KEY (consultation_service_id)
        REFERENCES consultation_services(id)
        ON DELETE CASCADE
);

CREATE INDEX idx_consultations_email
    ON consultations(email);

CREATE INDEX idx_consultation_services_consultation_id
    ON consultation_services(consultation_id);

CREATE INDEX idx_consultation_topics_service_id
    ON consultation_topics(consultation_service_id);