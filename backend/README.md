# 🚀 Portfolio Backend

> Enterprise-grade Spring Boot backend powering the Portfolio Website and Consultation Platform.

---

## 📌 Overview

The Portfolio Backend is a RESTful API built using Spring Boot, following clean architecture and enterprise development practices.

It provides APIs for managing consultation requests while serving as the foundation for future modules including authentication, contact management, admin dashboard, portfolio management, and analytics.

---

## ✨ Features

- ✅ RESTful API
- ✅ Spring Boot 4
- ✅ Java 21
- ✅ PostgreSQL
- ✅ Flyway Database Migration
- ✅ Bean Validation
- ✅ Global Exception Handling
- ✅ OpenAPI / Swagger Documentation
- ✅ Docker Support
- ✅ Environment Profiles
- ✅ Production Ready Configuration

---

# 🛠 Technology Stack

| Technology  | Version |
|-------------|---------|
| Java        | 21      |
| Spring Boot | 4.x     |
| Maven       | Latest  |
| PostgreSQL  | 16      |
| Flyway      | Latest  |
| Docker      | Latest  |
| OpenAPI     | Latest  |

---

# 📂 Project Structure

```text
backend
│
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com.mkondkari.portfolio
│   │   │
│   │   ├── config
│   │   ├── consultation
│   │   ├── exception
│   │   ├── common
│   │   └── BackendApplication.java
│   │
│   └── resources
│       ├── db
│       │   └── migration
│       ├── application.yml
│       ├── application-debug.yml
│       ├── application-dev.yml
│       └── application-prod.yml
│
├── pom.xml
└── README.md
```

---

# 🏗 Backend Architecture

<p>
    <img src="./docs/images/backend-architecture.png"
         alt="Backend Architecture"
         width="7220">
</p>

---

# 🔄 Request Flow

<p>
    <img src="./docs/images/consultation-request-flow.png"
         alt="Consultation Request Flow"
         width="6580">
</p>

---

# 📦 Modules

## ✅ Consultation

Current module responsible for handling consultation requests.

Features

- Create Consultation
- View Consultation
- Update Status
- Delete Consultation

---

# ⚙ Spring Profiles

| Profile | Purpose                 |
|---------|-------------------------|
| debug   | Local Development       |
| dev     | Development Environment |
| prod    | Production              |

---

# 🗄 Database

Current Database

- PostgreSQL

Migration Tool

- Flyway

Current Migration

```
V1__create_consultation_table.sql
```

---

# 🐳 Docker

Current Docker Services

- PostgreSQL

Future Services

- Spring Boot
- Redis
- Nginx

---

# 📖 API Documentation

Swagger UI

```
http://localhost:8080/swagger-ui.html
```

OpenAPI Specification

```
/v3/api-docs
```

---

# ▶ Running the Application

## Clone Repository

```bash
git clone <repository-url>
```

---

## Navigate

```bash
cd backend
```

---

## Start PostgreSQL

```bash
docker compose up -d
```

---

## Run Application

```bash
./mvnw spring-boot:run
```

Windows

```cmd
mvnw.cmd spring-boot:run
```

---

# 🧪 Testing

Run Tests

```bash
./mvnw test
```

---

# 📁 Configuration Files

```
application.yml
application-debug.yml
application-dev.yml
application-prod.yml
```

---

# 🔒 Security

Current

- Bean Validation
- Exception Handling
- Input Validation

Planned

- JWT Authentication
- Role Based Access
- OAuth2
- Rate Limiting

---

# 📈 Future Roadmap

- Authentication
- Authorization
- Contact APIs
- Portfolio APIs
- Admin Dashboard
- Email Notifications
- File Upload
- Redis Cache
- Monitoring
- CI/CD Pipeline

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (# 📚 Related Documentation)

[//]: # ()
[//]: # (Detailed documentation is available in the project `docs` directory.)

[//]: # ()
[//]: # (- docs/backend.md)

[//]: # (- docs/database.md)

[//]: # (- docs/docker.md)

[//]: # (- docs/api.md)

[//]: # (- docs/deployment.md)

[//]: # (- docs/security.md)

---

# 👨‍💻 Author

**Moshin Kondkari**

Senior Automation Engineer | Software Architect | Full Stack Developer

---

# 📄 License

This project is licensed under the MIT License.