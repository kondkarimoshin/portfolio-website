CREATE TABLE consultation (
    id BIGSERIAL PRIMARY KEY,

    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(150),

    service VARCHAR(100) NOT NULL,

    message TEXT NOT NULL,

    preferred_date TIMESTAMP,

    status VARCHAR(30) NOT NULL DEFAULT 'NEW',

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_consultation_status
    ON consultation(status);

CREATE INDEX idx_consultation_created_at
    ON consultation(created_at);

CREATE INDEX idx_consultation_email
    ON consultation(email);