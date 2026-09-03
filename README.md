# YukthiMantra Academy — Multi-App Monorepo

> Enterprise-grade multi-application monorepo powering the **YukthiMantra Academy** digital ecosystem.

[![CI Status](https://github.com/yukthimantrasacademy-website/yukthimantrasacademy-website_1/actions/workflows/ci.yml/badge.svg)](https://github.com/yukthimantrasacademy-website/yukthimantrasacademy-website_1/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16.3.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🏛️ Ecosystem Overview

This single GitHub repository contains three independently deployable applications and shared foundation packages:

```
yukthimantrasacademy-website_1/
├── 🌐 yukthimantrasacademy.com/         → Production Marketing & Admissions Portal
├── 🎓 app.yukthimantrasacademy.com/     → Academy Candidate & Mentor Platform (Coming Soon)
├── 🎟️ events.yukthimantrasacademy.com/  → Workshops, Hackathons & Seminars (Coming Soon)
├── 📦 packages/
│   ├── design-system/          → Colors, typography, spacing & visual tokens
│   ├── types/                  → Shared TypeScript definitions & contracts
│   ├── ui/                     → Component library contracts
│   └── utils/                  → Common validators and helpers
├── 📚 docs/
│   ├── architecture/           → Monorepo layout & shared packages guides
│   ├── deployment/             → Vercel & Hostinger DNS instructions
│   └── roadmap/                → Product & events roadmaps
└── ⚙️ .github/                  → CI workflows, issue & PR templates
```

---

## 🚀 Live Domains & Vercel Deployment Map

Each application deploys independently from this same GitHub repository using Vercel's native **Root Directory** setting:

| Domain | Application Path | Vercel Project | Target Role |
| :--- | :--- | :--- | :--- |
| [`yukthimantrasacademy.com`](https://yukthimantrasacademy.com) | `yukthimantrasacademy.com/` | `yukthimantrasacademy-website` | Production main website |
| [`app.yukthimantrasacademy.com`](https://app.yukthimantrasacademy.com) | `app.yukthimantrasacademy.com/` | `yukthimantra-platform` | Academy platform |
| [`events.yukthimantrasacademy.com`](https://events.yukthimantrasacademy.com) | `events.yukthimantrasacademy.com/` | `yukthimantra-events` | Events & workshops |

---

## 💻 Local Development Quickstart

### Prerequisites
- **Node.js** >= 20.x
- **npm** >= 10.x

### Run Local Development Servers

```bash
# Clone the repository
git clone https://github.com/yukthimantrasacademy-website/yukthimantrasacademy-website_1.git
cd yukthimantrasacademy-website_1

# Start Main Website (runs on http://localhost:3000)
npm run dev:main

# Start Academy Platform (runs on http://localhost:3001)
npm run dev:app

# Start Events Portal (runs on http://localhost:3002)
npm run dev:events
```

### Build Verification

```bash
# Build all three applications sequentially
npm run build:all

# Or build individual applications:
npm run build:main
npm run build:app
npm run build:events
```

### Linting

```bash
npm run lint:all
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
