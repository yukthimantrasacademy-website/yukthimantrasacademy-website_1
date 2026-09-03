# YukthiMantra Academy — Multi-App Monorepo

> Enterprise-grade multi-application monorepo powered by **pnpm workspaces** and **Turborepo** for the **YukthiMantra Academy** digital ecosystem.

[![CI Status](https://github.com/yukthimantrasacademy-website/yukthimantrasacademy-website_1/actions/workflows/ci.yml/badge.svg)](https://github.com/yukthimantrasacademy-website/yukthimantrasacademy-website_1/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16.3.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.x-blue?logo=turborepo)](https://turbo.build/)
[![pnpm](https://img.shields.io/badge/pnpm-11.x-orange?logo=pnpm)](https://pnpm.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🏛️ Ecosystem Architecture

This single GitHub repository contains three independently deployable applications and six shared foundation packages:

```
yukthimantrasacademy-website_1/
├── 📱 apps/
│   ├── 🌐 website/               → Primary Admissions & Marketing Portal (yukthimantrasacademy.com)
│   ├── 🎓 platform/              → Academy Candidate & Mentor Platform (app.yukthimantrasacademy.com)
│   └── 🎟️ events/                → Workshops, Hackathons & Seminars (events.yukthimantrasacademy.com)
│
├── 📦 packages/
│   ├── ui/                       → Reusable component primitives (Button, Badge, Card, Modal, Accordion)
│   ├── design-system/            → Colors, typography, spacing, shadows, animations & breakpoints
│   ├── types/                    → Shared TypeScript domain types, programme interfaces & API contracts
│   ├── config/                   → Centralized domain constants, brand parameters & environment helpers
│   ├── utils/                    → Validation helpers, formatters, slugify & common utilities
│   └── api-client/               → Typed API client abstraction for counselling leads & inquiries
│
├── 📚 docs/
│   ├── architecture/             → Monorepo layout & shared packages guides
│   ├── deployment/               → Vercel & Hostinger DNS instructions
│   └── roadmap/                  → Product & events roadmaps
│
└── ⚙️ .github/                    → Unified CI workflows, issue & PR templates
```

---

## 🚀 Live Domains & Vercel Deployment Map

Each application deploys independently from this repository using Vercel's native **Root Directory** configuration:

| Domain | Application Path | Vercel Project | Target Role |
| :--- | :--- | :--- | :--- |
| [`yukthimantrasacademy.com`](https://yukthimantrasacademy.com) | `apps/website/` | `yukthimantrasacademy-website` | Production main website |
| [`app.yukthimantrasacademy.com`](https://app.yukthimantrasacademy.com) | `apps/platform/` | `yukthimantra-platform` | Academy candidate & mentor platform |
| [`events.yukthimantrasacademy.com`](https://events.yukthimantrasacademy.com) | `apps/events/` | `yukthimantra-events` | Events, masterclasses & hackathons |

---

## 💻 Local Development Quickstart

### Prerequisites
- **Node.js** >= 20.x
- **pnpm** >= 10.x / 11.x

### Install Dependencies
```bash
pnpm install
```

### Run Local Development Servers
```bash
# Start all applications concurrently with Turborepo
pnpm dev

# Or run individual applications:
pnpm dev:website   # Main Website (http://localhost:3000)
pnpm dev:platform  # Academy Platform (http://localhost:3001)
pnpm dev:events    # Events Portal (http://localhost:3002)
```

### Type Checking & Linting
```bash
# Typecheck across all workspace packages and apps
pnpm typecheck

# Lint across all applications
pnpm lint
```

### Production Build Verification
```bash
# Build all three applications with Turborepo caching
pnpm build

# Or build individual applications:
pnpm build:website
pnpm build:platform
pnpm build:events
```

---

## 🌐 DNS & Hostinger Configuration

- **Apex Domain (`yukthimantrasacademy.com`)**: Stays unchanged. No modification needed to existing A or AAAA records.
- **Subdomains (`app` & `events`)**: In Hostinger DNS Zone, add standard CNAME records:
  - `app` → `cname.vercel-dns.com`
  - `events` → `cname.vercel-dns.com`
- **Mail (MX/TXT)**: Untouched.

For full step-by-step instructions, see [`docs/deployment/hostinger-dns-configuration.md`](docs/deployment/hostinger-dns-configuration.md) and [`docs/deployment/vercel-monorepo-setup.md`](docs/deployment/vercel-monorepo-setup.md).

---

## 📖 Documentation Index

- [Architecture & Design Decisions](docs/architecture/monorepo-structure.md)
- [Shared Packages Usage Guide](docs/architecture/shared-packages-guide.md)
- [Vercel Monorepo Setup Guide](docs/deployment/vercel-monorepo-setup.md)
- [Hostinger DNS Configuration](docs/deployment/hostinger-dns-configuration.md)
- [Academy Platform Roadmap](docs/roadmap/platform-roadmap.md)
- [Events & Workshops Roadmap](docs/roadmap/events-roadmap.md)
- [Contribution Guidelines](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)

---

## 🛡️ License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.
