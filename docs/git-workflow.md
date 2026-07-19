# 🌿 Git Workflow

## 📖 Overview

This document describes the Git branching strategy and development workflow used throughout the project.

The workflow is designed to support safe development, maintain a stable production branch, and encourage clean, reviewable code changes.

---

# 🎯 Workflow Objectives

The Git workflow aims to:

- ✅ Keep the production branch stable
- ✅ Isolate feature development
- ✅ Enable code reviews through Pull Requests
- ✅ Maintain a clean Git history
- ✅ Support continuous deployment

---

# 🌳 Branch Strategy

The repository uses the following branch structure.

```text
main
│
├── develop
│
├── feature/sprint-01-foundation
├── feature/sprint-02-design-system
├── feature/sprint-03-premium-hero
├── feature/sprint-04-about-section
├── feature/sprint-05-experience
├── feature/sprint-06-skills
├── feature/sprint-07-career-journey
├── feature/sprint-08-contact
├── feature/sprint-09-polish
├── feature/sprint-10
├── feature/sprint-11-ui-enhancements
├── feature/sprint-12-experience
├── feature/sprint-13-experience-enhancement
├── feature/sprint-14-career-journey
├── feature/sprint-15-technical-expertise-enhancement
└── feature/sprint-16-contact-experience-enhancement
```

---

# 🚀 Main Branch

```text
main
```

Purpose:

- Production-ready code
- Stable releases
- Automatically deployed to Vercel

### Rules

- ✅ Protected branch
- ✅ No direct commits
- ✅ Merge only after review
- ✅ Always deployable

---

# 🔄 Develop Branch

```text
develop
```

Purpose:

- Integration branch
- Collect completed features
- Testing before production

Develop acts as the staging branch before changes are promoted to **main**.

---

# 🛠️ Feature Branches

Every new enhancement starts from the **develop** branch.

Naming convention:

```text
feature/<feature-name>
```

Examples:

```text
feature/sprint-17-blog
feature/navbar-improvements
feature/contact-form
```

Each feature branch should focus on a single enhancement.

---

# 🔁 Development Workflow

The standard development process is:

```text
develop
      │
      ▼
Create Feature Branch
      │
      ▼
Develop Feature
      │
      ▼
Local Testing
      │
      ▼
Commit Changes
      │
      ▼
Push to GitHub
      │
      ▼
Create Pull Request
      │
      ▼
Merge into develop
      │
      ▼
Regression Testing
      │
      ▼
Merge develop → main
      │
      ▼
Automatic Production Deployment
```

---

# 💻 Creating a Feature Branch

Update your local repository.

```bash
git checkout develop
git pull origin develop
```

Create a new feature branch.

```bash
git checkout -b feature/my-new-feature
```

---

# 💾 Commit Guidelines

Write meaningful commit messages that clearly describe the change.

### Good Examples

```text
Add experience timeline section

Refactor hero layout for mobile responsiveness

Improve navigation accessibility

Update contact section styling

Fix TypeScript build warnings
```

### Avoid

```text
fix

changes

update

work

temp
```

---

# 📤 Push Changes

Push the feature branch to GitHub.

```bash
git push origin feature/my-new-feature
```

---

# 🔀 Pull Requests

Before merging:

- ✅ Build succeeds
- ✅ TypeScript passes
- ✅ ESLint passes
- ✅ UI tested
- ✅ Responsive layout verified
- ✅ Documentation updated (if applicable)

Pull Requests should contain:

- Summary
- Screenshots (if UI changes)
- Related sprint or issue

---

# 🔒 Branch Protection

The **main** branch is protected.

Rules include:

- No direct commits
- Pull Request required
- Production deployments only from **main**
- Repository owner controls production merges

This ensures production remains stable and deployable.

---

# 🚀 Deployment Flow

Production deployment is fully automated.

```text
Feature Branch
      │
      ▼
Develop
      │
      ▼
Main
      │
      ▼
GitHub
      │
      ▼
Vercel
      │
      ▼
Production Website
```

Only the **main** branch is connected to the production deployment.

---

# ✅ Best Practices

Follow these practices during development:

- 🌿 Create one feature branch per enhancement
- 💬 Write meaningful commit messages
- 🔍 Keep Pull Requests focused
- 🧪 Test locally before pushing
- 📚 Update documentation alongside code changes
- 🚀 Merge only verified code into **main**

---

# ⚠️ Avoid

Avoid the following:

- ❌ Direct commits to **main**
- ❌ Large Pull Requests
- ❌ Mixing unrelated changes
- ❌ Skipping local testing
- ❌ Force pushing to shared branches

---

# 📌 Summary

The project follows a feature-branch workflow that promotes clean development, stable releases, and continuous deployment.

By isolating work into dedicated feature branches, integrating through **develop**, and deploying only from **main**, the repository remains organized, maintainable, and production-ready throughout the development lifecycle.
