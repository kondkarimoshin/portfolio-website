# 📏 Coding Standards

## 📖 Overview

This document defines the coding standards and development conventions followed throughout the project.

The objective is to maintain a **clean**, **consistent**, and **maintainable** codebase while following modern React and TypeScript best practices.

All new code should follow these guidelines to ensure consistency across the project.

---

# 🎯 Core Principles

Every piece of code should follow these principles:

- ✅ Readability over cleverness
- ✅ Keep components small and focused
- ✅ Reusability whenever possible
- ✅ Strong TypeScript typing
- ✅ Single Responsibility Principle (SRP)
- ✅ Separation of concerns
- ✅ Consistent naming conventions
- ✅ Avoid unnecessary complexity

---

# 📂 File Naming Conventions

## Components

Use **PascalCase**.

```text
Hero.tsx
ExperienceCard.tsx
TechnologyStack.tsx
```

---

## Types

Use descriptive names ending with `.types.ts`.

```text
experience.types.ts
technology.types.ts
contact-item.types.ts
```

---

## Constants

Use lowercase with descriptive names ending in `.data.ts`, `.config.ts`, or `.map.ts`.

Examples

```text
experience.data.ts
skills.data.ts
navigation.config.ts
technology-icons.map.ts
```

---

## Hooks

Custom hooks must begin with `use`.

```text
useHashScroll.ts
useActiveSection.ts
```

---

# 📁 Folder Organization

Each feature should remain self-contained.

Recommended structure:

```text
feature/
├── components/
├── constants/
├── types/
└── Feature.tsx
```

Feature code should not depend directly on another feature unless absolutely necessary.

---

# 🧩 Component Guidelines

Components should:

- Be focused on a single responsibility.
- Remain as small as practical.
- Receive data through props.
- Avoid unnecessary state.
- Be reusable whenever possible.

Example:

✅ Good

```text
ExperienceCard.tsx
Responsibilities.tsx
BusinessImpact.tsx
```

❌ Avoid

```text
EverythingInsideOneHugeComponent.tsx
```

---

# 🛡️ TypeScript Standards

Always prefer explicit typing.

Use interfaces or type aliases for:

- Props
- Data models
- Configuration objects

Example

```typescript
interface SkillCategory {
  title: string;
  technologies: Technology[];
}
```

Avoid using:

```typescript
any
```

unless absolutely unavoidable.

---

# 🎨 Styling Standards

The project uses **Tailwind CSS**.

Guidelines:

- Keep utility classes readable.
- Group related utilities together.
- Avoid unnecessary custom CSS.
- Reuse UI components instead of duplicating styles.

---

# 📊 Data Management

Static content should be stored separately from UI components.

Examples include:

- Skills
- Experience
- Contact Information
- Navigation

This keeps components focused only on rendering.

---

# 🔄 Import Order

Maintain a consistent import order.

```typescript
// React

// Third-party libraries

// Internal components

// Hooks

// Constants

// Types

// Assets
```

This improves readability and consistency.

---

# 📝 Naming Conventions

## Components

Use PascalCase.

```text
Hero
ExperienceCard
TechnologyStack
```

---

## Variables

Use camelCase.

```typescript
currentSection
experienceData
selectedSkill
```

---

## Constants

Use camelCase for exported constants.

```typescript
navigationConfig
experienceData
technologyIcons
```

---

## Interfaces

Use PascalCase.

```typescript
Technology
Experience
SkillCategory
```

---

# ♻️ Reusability

Before creating a new component, check whether an existing one can be reused.

Examples include:

- Button
- Badge
- Section
- Container
- Heading
- Text
- Stat

Reusability helps maintain a consistent design system.

---

# 🚫 Avoid

The following practices should be avoided:

- ❌ Duplicate code
- ❌ Large monolithic components
- ❌ Inline hardcoded data
- ❌ Unused imports
- ❌ Unused variables
- ❌ Deeply nested components
- ❌ Excessive prop drilling
- ❌ Using `any` without justification

---

# 🧪 Code Quality

Before committing code, ensure:

- ✅ Project builds successfully
- ✅ No TypeScript errors
- ✅ No ESLint warnings
- ✅ Responsive layout verified
- ✅ Components remain reusable
- ✅ Imports are organized
- ✅ Code has been reviewed

---

# 💡 Best Practices

Follow these practices throughout development:

- Keep components focused.
- Prefer composition over duplication.
- Extract reusable logic into hooks.
- Store configuration separately from UI.
- Keep files organized.
- Write meaningful commit messages.
- Keep documentation updated alongside implementation.

---

# 📌 Summary

Following these coding standards ensures the project remains clean, scalable, and easy to maintain.

Consistency across naming, structure, typing, styling, and component design helps improve collaboration, simplifies future enhancements, and supports long-term maintainability.