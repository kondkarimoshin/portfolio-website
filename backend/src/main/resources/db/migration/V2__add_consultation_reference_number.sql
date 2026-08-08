ALTER TABLE consultations
ADD COLUMN reference_number VARCHAR(30);

ALTER TABLE consultations
ADD CONSTRAINT uk_consultations_reference_number
UNIQUE (reference_number);