# Contributing to YukthiMantra Academy Monorepo

Thank you for contributing to YukthiMantra! Please read these guidelines before opening issues or submitting pull requests.

---

## 1. Monorepo Structure

Our repository contains three independent Next.js applications and shared packages:

- `yukthimantrasacademy.com/`: Main marketing, curriculum, and admissions website.
- `app.yukthimantrasacademy.com/`: Academy candidate and mentor portal (Coming Soon).
- `events.yukthimantrasacademy.com/`: Workshops, seminars, and hackathons portal (Coming Soon).
- `packages/`: Shared packages (`design-system`, `types`, `ui`, `utils`).
- `docs/`: Architecture, deployment, and roadmap specifications.

---

## 2. Development Workflow

### Prerequisites
- **Node.js**: 20.x or higher
- **npm**: 10.x or higher

### Running Applications Locally

```bash
# Run Main Website (Port 3000)
npm run dev:main

# Run Academy Platform (Port 3001)
npm run dev:app

# Run Events Portal (Port 3002)
npm run dev:events
```

### Building Applications

```bash
# Build All 3 Applications
npm run build:all

# Build specific app
npm run build:main
npm run build:app
npm run build:events
```

### Linting

```bash
npm run lint:all
```

---

## 3. Branching & Commit Guidelines

- Main production branch: `main`
- Feature branches: `feat/<feature-name>`
- Bugfix branches: `fix/<issue-description>`
- Documentation: `docs/<topic>`

Commit messages should follow Conventional Commits format:
`feat(website): add new healthcare ai curriculum section`
`fix(app): fix waitlist input focus style`
`docs(deploy): add Hostinger DNS record documentation`

---

## 4. Pull Request Checklist

1. Verify that all 3 applications build cleanly (`npm run build:all`).
2. Run linter (`npm run lint:all`).
3. Fill out the PR template with affected applications.
4. Ensure no secret keys, credentials, or production `.env` files are committed.
