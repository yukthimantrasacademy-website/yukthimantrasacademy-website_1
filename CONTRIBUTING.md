# Contributing to YukthiMantra Academy Monorepo

Thank you for contributing to YukthiMantra! Please read these guidelines before opening issues or submitting pull requests.

---

## 1. Monorepo Structure

Our repository contains three independent Next.js applications and shared packages:

- `apps/website/`: Main marketing, curriculum, and admissions platform (`yukthimantrasacademy.com`).
- `apps/platform/`: Academy candidate and mentor portal (`app.yukthimantrasacademy.com`).
- `apps/events/`: Workshops, masterclasses, and hackathons portal (`events.yukthimantrasacademy.com`).
- `packages/`: Shared packages (`design-system`, `types`, `ui`, `config`, `utils`, `api-client`).
- `docs/`: Architecture, deployment, and roadmap specifications.

---

## 2. Development Workflow

### Prerequisites
- **Node.js**: 20.x or higher
- **pnpm**: 10.x / 11.x or higher

### Installing Dependencies
```bash
pnpm install
```

### Running Applications Locally
```bash
# Run all applications concurrently with Turborepo
pnpm dev

# Run individual applications
pnpm dev:website   # Main Website (Port 3000)
pnpm dev:platform  # Academy Platform (Port 3001)
pnpm dev:events    # Events Portal (Port 3002)
```

### Verification Commands
```bash
# Typecheck across all workspace packages and apps
pnpm typecheck

# Lint across all applications
pnpm lint

# Build all applications with Turborepo caching
pnpm build
```

---

## 3. Branching & Commit Guidelines

- Main production branch: `main`
- Feature branches: `feat/<feature-name>`
- Bugfix branches: `fix/<issue-description>`
- Documentation: `docs/<topic>`

Commit messages should follow Conventional Commits format:
`feat(website): add new healthcare ai curriculum section`
`fix(platform): fix waitlist input focus style`
`docs(deploy): add Hostinger DNS record documentation`

---

## 4. Pull Request Checklist

1. Verify that all applications and packages build cleanly (`pnpm build`).
2. Run typechecking (`pnpm typecheck`).
3. Run linter (`pnpm lint`).
4. Fill out the PR template with affected applications.
5. Ensure no secret keys, credentials, or production `.env` files are committed.
