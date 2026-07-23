# Sprint 22 -- Consultation Backend, Database & API Development

**Branch** `feature/sprint-22-consultation-backend-api`

------------------------------------------------------------------------

# Sprint Vision

Transform the Consultation feature from a frontend prototype into a
complete enterprise-grade full-stack application using Spring Boot,
PostgreSQL, and REST APIs.

This sprint focuses on building a scalable backend architecture that
follows enterprise development practices and is suitable for production
deployment.

------------------------------------------------------------------------

# Sprint Goal

Build a production-ready backend that:

-   Stores consultation requests
-   Exposes secure REST APIs
-   Integrates seamlessly with the React frontend
-   Uses PostgreSQL for persistence
-   Follows enterprise architecture and coding standards

------------------------------------------------------------------------

# Technology Stack

## Frontend

-   React
-   TypeScript
-   Vite
-   Axios

## Backend

-   Java 21
-   Spring Boot 3.x
-   Maven
-   Spring Web
-   Spring Data JPA
-   Spring Validation
-   Lombok
-   Flyway
-   OpenAPI / Swagger

## Database

-   PostgreSQL

------------------------------------------------------------------------

# Architecture

``` text
React Frontend
      │
      ▼
REST API (Spring Boot)
      │
 ┌────┼────────────────────────┐
 ▼    ▼                        ▼
Validation          Business Logic
      │                    │
      └────────► Service Layer
                     │
                     ▼
             Repository (JPA)
                     │
                     ▼
                PostgreSQL
```

------------------------------------------------------------------------

# Phase 1 -- Solution Design

## S22-001

-   Finalize backend architecture
-   Finalize package structure
-   Finalize API contracts
-   Finalize database schema
-   Define validation rules
-   Define status lifecycle

------------------------------------------------------------------------

# Phase 2 -- Backend Setup

## S22-002

Create Spring Boot project.

Configure:

-   Java 21
-   Maven
-   Spring Boot
-   PostgreSQL
-   Flyway
-   Swagger
-   Profiles (dev/test/prod)

------------------------------------------------------------------------

# Phase 3 -- Database Design

## S22-003

Primary table:

`consultation_request`

### Initial Fields

-   id (UUID)
-   consultation_number
-   category
-   topic
-   first_name
-   last_name
-   email
-   phone
-   company
-   designation
-   experience
-   preferred_date
-   preferred_time
-   timezone
-   mode
-   additional_details
-   status
-   created_at
-   updated_at

------------------------------------------------------------------------

# Phase 4 -- Backend Layers

## S22-004

Implement:

-   Entity
-   DTO
-   Mapper
-   Repository
-   Service
-   Controller

Package structure:

``` text
controller
service
repository
entity
dto
mapper
validation
exception
config
util
```

------------------------------------------------------------------------

# Phase 5 -- REST APIs

## S22-005

Endpoints:

-   POST /api/v1/consultations
-   GET /api/v1/consultations
-   GET /api/v1/consultations/{id}
-   PATCH /api/v1/consultations/{id}
-   DELETE /api/v1/consultations/{id}

Future:

-   Search
-   Pagination
-   Filtering

------------------------------------------------------------------------

# Phase 6 -- Frontend Integration

## S22-006

Replace the mock consultation service with REST API integration.

-   Axios client
-   API service layer
-   Loading states
-   Error handling
-   Success response handling

------------------------------------------------------------------------

# Phase 7 -- Validation

## S22-007

Implement validation for:

-   Required fields
-   Email
-   Phone
-   Preferred date/time
-   Category
-   Topic
-   Duplicate submissions

Client-side and server-side validation will both be enforced.

------------------------------------------------------------------------

# Phase 8 -- Exception Handling

## S22-008

Implement:

-   Global exception handler
-   Standard API error response
-   Validation error handling
-   Business exception handling

------------------------------------------------------------------------

# Phase 9 -- Logging & Documentation

## S22-009

Implement:

-   Request logging
-   Error logging
-   Business event logging
-   Swagger / OpenAPI documentation

------------------------------------------------------------------------

# Phase 10 -- Production Readiness

## S22-010

Prepare the application for deployment by implementing:

-   Environment profiles
-   Configuration management
-   Database migrations
-   Clean project structure

------------------------------------------------------------------------

# Consultation Status Lifecycle

``` text
NEW
  ↓
UNDER_REVIEW
  ↓
SCHEDULED
  ↓
COMPLETED

or

CANCELLED
```

------------------------------------------------------------------------

# Deliverables

-   Spring Boot backend
-   PostgreSQL database
-   REST APIs
-   Enterprise architecture
-   React integration
-   Persistent consultation storage
-   API documentation
-   Production-ready backend foundation

------------------------------------------------------------------------

# Success Criteria

-   Consultation requests are saved successfully.
-   Frontend communicates with backend using REST APIs.
-   Data persists in PostgreSQL.
-   APIs are documented with Swagger.
-   Validation and exception handling are implemented.
-   Code follows enterprise architecture and clean coding practices.

------------------------------------------------------------------------

# Future Enhancements

-   Authentication & Authorization
-   Admin Dashboard
-   Email Notifications
-   Calendar Integration
-   File Uploads
-   Analytics & Reporting
-   Docker & Kubernetes Deployment
-   CI/CD Pipeline




Install Docker Desktop

We'll use PostgreSQL in a container.

2️⃣ Install JDK 21

Make Java, Maven, and IntelliJ all use the same JDK.

3️⃣ Generate the Spring Boot project