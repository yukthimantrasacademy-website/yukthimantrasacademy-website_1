# YukthiMantra Academy Monorepo Architecture

## Overview

The YukthiMantra codebase is structured as an enterprise-grade multi-application monorepo powered by **pnpm workspaces** and **Turborepo**. It is engineered for high modularity, independent deployment workflows on Vercel, and zero cross-application deployment coupling.

```
yukthimantrasacademy-website_1/
├── apps/
│   ├── website/                   # Primary marketing, curriculum & admissions platform (yukthimantrasacademy.com)
│   ├── platform/                  # Academy Candidate & Mentor platform (app.yukthimantrasacademy.com)
│   └── events/                    # Masterclasses, webinars & hackathon portal (events.yukthimantrasacademy.com)
│
├── packages/                      # Shared workspace libraries
│   ├── ui/                        # Reusable component primitives (Button, Badge, Card, Modal, Accordion)
│   ├── design-system/             # Color tokens, typography, shadows, spacing, animations
│   ├── types/                     # Shared domain contracts & TypeScript interfaces
│   ├── config/                    # Shared domain constants, brand parameters, environment helpers
│   ├── utils/                     # Formatting, validation, helper routines
│   └── api-client/                # Typed API client abstraction for leads & admissions
│
├── docs/                          # Architectural, operational & deployment specifications
│   ├── architecture/              # System architecture guides
│   ├── deployment/                # Vercel & Hostinger DNS instructions
│   └── roadmap/                   # Feature roadmaps
│
├── .github/                       # CI/CD workflows, templates & code ownership
│   ├── workflows/ci.yml           # Unified pnpm & Turborepo build, lint & typecheck CI
│   ├── ISSUE_TEMPLATE/            # Standardized GitHub issue templates
│   ├── pull_request_template.md   # Pull request review checklist
│   └── CODEOWNERS                 # Code ownership rules
│
├── pnpm-workspace.yaml            # pnpm workspace definition (apps/* and packages/*)
├── turbo.json                     # Turborepo task pipeline orchestration
├── package.json                   # Root workspace orchestration
├── README.md                      # Workspace documentation & quickstart
├── CONTRIBUTING.md                # Development standards & guidelines
├── SECURITY.md                    # Vulnerability reporting process
└── LICENSE                        # Project licensing
```

## Architectural Principles

1. **Independent Deployability**: Each application (`apps/website`, `apps/platform`, `apps/events`) contains its own Next.js configuration and can be built and deployed independently to Vercel without triggering builds or downtime on other applications.
2. **Deterministic Root Directories**: Vercel utilizes its native `Root Directory` setting (`apps/website`, `apps/platform`, `apps/events`), allowing all three apps to share a single source of truth in Git.
3. **Domain Isolation**: Each application binds to its respective custom domain (`yukthimantrasacademy.com`, `app.yukthimantrasacademy.com`, `events.yukthimantrasacademy.com`) with cross-domain links configured via environment variables and shared constants in `@yukthimantra/config`.
4. **Shared Token Contracts & Component Primitives**: Shared styles, types, utilities, and components reside under `packages/` to ensure visual consistency and type safety across applications.
