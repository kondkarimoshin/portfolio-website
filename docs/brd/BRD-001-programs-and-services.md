# Business Requirements Document (BRD)

| Document Information | Details |
|----------------------|---------|
| **Document ID** | BRD-001 |
| **Project** | Portfolio Website |
| **Module** | Programs & Services |
| **Version** | 1.0 |
| **Status** | Draft |
| **Author** | Moshin Kondkari |
| **Created On** | 19 Jul 2026 |
| **Last Updated** | 19 Jul 2026 |

---

# 1. Executive Summary

The Portfolio Website currently serves as a professional portfolio showcasing experience, technical expertise, projects, and achievements.

This BRD proposes introducing a new **Programs & Services** module that transforms the website into a professional brand platform capable of promoting training programs, mentoring services, and corporate consulting while keeping the portfolio experience separate.

The new module will function as an independent business section within the same application and domain.

---

# 2. Business Objective

The primary objective is to create an additional revenue stream by offering professional services through the existing website.

The solution should allow:

- Engineering colleges to book workshops.
- Universities to invite guest lectures.
- Companies to request consulting services.
- Students to enroll in interview preparation and mentoring sessions.
- Professionals to seek career guidance.

---

# 3. Business Goals

## Primary Goals

- Expand the portfolio into a professional brand.
- Showcase consulting and training services.
- Generate qualified business leads.
- Increase professional visibility.
- Establish industry credibility.

## Secondary Goals

- Support future online courses.
- Enable workshop bookings.
- Publish educational resources.
- Build long-term partnerships with colleges and organizations.

---

# 4. Scope

## In Scope

- New Programs & Services navigation item.
- Dedicated landing page.
- Individual service pages.
- Contact/Inquiry forms.
- Service descriptions.
- Call-to-action buttons.

## Out of Scope (Future Phases)

- Online payment.
- LMS integration.
- Student portal.
- Video courses.
- Booking calendar.
- Certificates.
- Admin dashboard.

---

# 5. Navigation

Current Navigation

Home

About

Experience

Skills

Projects

Contact

Future Navigation

Home

About

Experience

Skills

Projects

Contact

Programs & Services

**Business Rule**

The **Programs & Services** menu shall always appear as the last navigation item.

---

# 6. User Journey

## Portfolio Visitor

Portfolio

↓

About

↓

Experience

↓

Projects

↓

Contact

---

## Business Visitor

Programs & Services

↓

Select Service

↓

Read Details

↓

Submit Inquiry

↓

Business Discussion

---

# 7. Functional Requirements

## FR-001

The application shall include a new navigation item named

**Programs & Services**

---

## FR-002

Selecting the navigation item shall redirect users to

```
/services
```

instead of scrolling within the portfolio page.

---

## FR-003

The landing page shall provide an overview of all available services.

---

## FR-004

Each service shall have its own dedicated page.

Example URLs

```
/services

/services/college-training

/services/interview-preparation

/services/career-mentoring

/services/corporate-consulting
```

---

## FR-005

Each service page shall contain

- Hero section
- Overview
- Target audience
- Topics covered
- Benefits
- Duration
- Delivery modes
- Contact section

---

## FR-006

Every service page shall contain a prominent

"Book a Session"

Call-to-Action.

---

# 8. Service Catalog

## College Training

Target Audience

- Engineering Colleges
- Universities
- Placement Cells

Topics

- Industry Readiness
- Resume Building
- LinkedIn Optimization
- Group Discussion
- Corporate Communication
- AI for Students
- Placement Preparation
- Career Planning

---

## Interview Preparation

Target Audience

- Fresh Graduates
- Working Professionals

Topics

- HR Interviews
- Technical Interviews
- Mock Interviews
- Resume Review
- Salary Negotiation

---

## Career Mentoring

Target Audience

- Students
- Early Career Professionals

Topics

- Career Planning
- Technology Roadmaps
- Skill Development
- Learning Strategies
- Career Growth

---

## Corporate Consulting

Target Audience

- IT Companies
- Startups
- Enterprises

Topics

- Test Automation
- Framework Design
- QA Transformation
- CI/CD
- AI in Testing
- Team Mentoring

---

# 9. Website Architecture

```
Portfolio Website

│

├── Portfolio

│

└── Programs & Services

        │

        ├── College Training

        ├── Interview Preparation

        ├── Career Mentoring

        └── Corporate Consulting
```

---

# 10. Technical Architecture

```
src/

pages/

HomePage.tsx

ProgramsServicesPage.tsx

CollegeTrainingPage.tsx

InterviewPreparationPage.tsx

CareerMentoringPage.tsx

CorporateConsultingPage.tsx
```

---

# 11. UI Requirements

Landing Page shall contain

- Hero Banner
- Introduction
- Four Service Cards
- Why Choose Me
- Call-to-Action
- Contact Form

Each service page shall maintain consistent branding with the portfolio.

---

# 12. Non-Functional Requirements

- Responsive Design
- Mobile First
- Fast Loading
- SEO Friendly
- Accessibility Compliant
- Reusable Components
- Enterprise Coding Standards

---

# 13. Future Enhancements

Phase 2

- Testimonials
- Workshop Gallery
- FAQs
- Downloadable Brochures

Phase 3

- Online Booking
- Calendar Integration
- Email Notifications
- Blog
- Newsletter

Phase 4

- Online Courses
- Learning Management System
- Student Dashboard
- Payment Gateway
- Certificates

---

# 14. Risks

| Risk | Mitigation |
|------|------------|
| Website becomes cluttered | Keep Programs & Services on separate routes |
| Portfolio loses focus | Maintain complete separation between Portfolio and Services |
| Future expansion complexity | Use modular routing and feature-based architecture |

---

# 15. Success Criteria

The implementation will be considered successful when:

- Programs & Services is accessible from the main navigation.
- Portfolio remains unchanged.
- Each service has an independent landing page.
- Visitors can easily submit inquiries.
- Website remains responsive and performant.
- Architecture supports future expansion.

---

# 16. Release Plan

| Sprint | Deliverables |
|----------|--------------|
| Sprint 17 | Routing, Navigation, Programs & Services Landing Page |
| Sprint 18 | College Training Module |
| Sprint 19 | Interview Preparation & Career Mentoring |
| Sprint 20 | Corporate Consulting, Contact Integration, FAQ |
| Sprint 21+ | Booking, LMS, Courses, Payments |

---

# 17. Conclusion

The Programs & Services module will evolve the Portfolio Website from a static professional portfolio into a scalable professional brand platform.

The portfolio will continue to establish credibility, while the Programs & Services section will serve as the business-facing platform for training, mentoring, and consulting opportunities.

This architecture ensures clear separation of concerns, maintains the integrity of the portfolio, and provides a strong foundation for future business expansion.