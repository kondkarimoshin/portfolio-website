# 📁 Folder Structure

## 📖 Overview

This document describes the repository structure and explains the purpose of each directory.

The project follows a **feature-based architecture**, allowing each feature to remain modular, scalable, and easy to maintain. Supporting documentation is kept separate from the application source code to ensure a clear separation between implementation and project documentation.

---

# 🏛️ Repository Structure

```text
Portfolio/
│
├── docs/
├── frontend/
├── .gitignore
└── README.md
```

---

# 📂 Root Directory

The root directory contains the overall project structure.

| Folder / File | Purpose |
|---------------|---------|
| `docs/` | Project documentation |
| `frontend/` | React application source code |
| `README.md` | Repository overview |
| `.gitignore` | Git ignore configuration |

---

# 📚 Documentation Directory

```text
docs/
│
├── architecture.md
├── coding-standards.md
├── deployment.md
├── folder-structure.md
├── git-workflow.md
├── project-context.md
├── project-roadmap.md
│
├── sprint/
│
└── standards/
```

The **docs** directory contains all project-related documentation.

### Includes

- 🏗️ Architecture
- 📏 Coding Standards
- 🚀 Deployment
- 📁 Folder Structure
- 🌿 Git Workflow
- 🎯 Project Context
- 🛣️ Roadmap
- 📅 Sprint Documentation
- 🎨 UI Standards

---

# 💻 Frontend Structure

```text
frontend/
│
├── public/
├── src/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── eslint.config.js
```

The **frontend** directory contains the complete React application.

---

# 🗂️ Source Code Structure

```text
src/
│
├── assets/
├── components/
├── constants/
├── features/
├── hooks/
├── layouts/
├── App.tsx
└── main.tsx
```

Each directory has a specific responsibility.

---

# 🎨 assets/

Stores static resources used by the application.

Examples include:

- Images
- Branding
- Logos
- Profile picture

```text
assets/
├── branding/
└── images/
```

---

# 🧩 components/

Contains reusable components shared across multiple features.

```text
components/
│
├── animations/
└── ui/
```

## ✨ animations/

Reusable animation components.

Examples:

- FadeIn
- Reveal

---

## 🎛️ ui/

Shared UI components.

Examples:

- Badge
- Button
- Container
- Heading
- Section
- Stat
- Text

These components are generic and contain no feature-specific business logic.

---

# ⚙️ constants/

Stores application-wide configuration.

Examples:

- Navigation configuration
- Personal information
- Shared settings

---

# 📦 features/

The application follows a **feature-first architecture**.

Each feature is completely self-contained.

Current features include:

- 🚀 Hero
- 👨‍💼 About
- 💼 Experience
- 🛠️ Skills
- 📬 Contact

Typical structure:

```text
feature/
│
├── components/
├── constants/
├── types/
└── Feature.tsx
```

Benefits include:

- Better scalability
- Easier maintenance
- Reduced coupling
- Clear ownership

---

# 🪝 hooks/

Contains reusable custom React hooks.

Current hooks include:

- useActiveSection
- useHashScroll

These hooks encapsulate reusable application logic.

---

# 🖥️ layouts/

Responsible for the overall page structure.

Examples include:

- Navbar
- Footer
- MainLayout
- Avatar components

---

# 🌍 public/

Contains static files served directly by the web server.

Examples:

- Resume PDF
- Favicon
- Images
- Robots.txt
- Sitemap
- Web Manifest

---

# 📄 Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Project dependencies and scripts |
| `vite.config.ts` | Vite configuration |
| `tsconfig.json` | TypeScript configuration |
| `eslint.config.js` | ESLint configuration |

---

# 💡 Design Decisions

The folder structure is based on several engineering principles:

- ✅ Feature-first organization
- ✅ Separation of concerns
- ✅ Modular architecture
- ✅ Reusable components
- ✅ Maintainable codebase
- ✅ Strong TypeScript typing
- ✅ Easy scalability

This organization minimizes dependencies between features and keeps related files together.

---

# 🚀 Scalability

Adding a new feature requires creating a new directory under:

```text
src/features/
```

Example:

```text
features/
└── testimonials/
    ├── components/
    ├── constants/
    ├── types/
    └── Testimonials.tsx
```

No restructuring of the existing application is required.

---

# 📌 Summary

The project uses a clean, feature-based folder structure designed for scalability and long-term maintainability.

By organizing source code into reusable components, self-contained features, shared configurations, and dedicated documentation, the repository remains easy to navigate, understand, and extend as the project continues to evolve.