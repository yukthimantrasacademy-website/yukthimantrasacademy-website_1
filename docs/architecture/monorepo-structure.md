# YukthiMantra Academy Monorepo Architecture

## Overview

The YukthiMantra codebase is structured as an enterprise-grade multi-application monorepo designed for high modularity, independent deployment workflows on Vercel, and zero cross-application deployment coupling.

```
yukthimantrasacademy-website_1/
├── yukthimantra.com/              # Primary production marketing & curriculum portal
│   ├── public/                    # Static assets, videos, manifests
│   ├── src/                       # Next.js App Router source
│   ├── package.json               # Independent dependencies & scripts
│   ├── next.config.ts             # App-level Next.js configuration
│   └── tsconfig.json              # TypeScript compilation settings
│
├── app.yukthimantra.com/          # Academy Candidate & Mentor platform
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── next.config.ts
│   └── tsconfig.json
│
├── events.yukthimantra.com/       # Masterclasses, workshops & hackathon portal
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── next.config.ts
│   └── tsconfig.json
│
├── packages/                      # Shared internal libraries & design tokens
│   ├── design-system/             # Color tokens, typography, shadows, spacing
│   ├── types/                     # Shared domain contracts & TypeScript interfaces
│   ├── ui/                        # Reusable component contracts
│   └── utils/                     # Formatting, validation, helper routines
│
├── docs/                          # Architectural, operational & deployment specifications
│   ├── architecture/              # System architecture guides
│   ├── deployment/                # Vercel & Hostinger DNS instructions
│   └── roadmap/                   # Feature roadmaps
│
├── .github/                       # CI/CD workflows, templates & code ownership
│   ├── workflows/ci.yml           # Multi-app matrix test & build pipeline
│   ├── ISSUE_TEMPLATE/            # Standardized GitHub issue templates
│   ├── pull_request_template.md   # Pull request review checklist
│   └── CODEOWNERS                 # Code ownership rules
│
├── README.md                      # Workspace documentation & quickstart
├── CONTRIBUTING.md                # Development standards & guidelines
├── SECURITY.md                    # Vulnerability reporting process
├── LICENSE                        # Project licensing
└── package.json                   # Root workspace orchestration
```

## Architectural Principles

1. **Independent Deployability**: Each application (`yukthimantra.com`, `app.yukthimantra.com`, `events.yukthimantra.com`) contains its own `package.json`, lockfile, and Next.js configuration. A deployment trigger for one project on Vercel does not force recompilation or downtime on the other applications.
2. **Deterministic Root Directories**: Vercel utilizes its native `Root Directory` setting per project, allowing all three apps to share a single source of truth in Git without requiring complicated monorepo orchestration tools like Turborepo unless future requirements demand it.
3. **Domain Isolation**: Each application is built to bind to its respective custom domain (`yukthimantra.com`, `app.yukthimantra.com`, `events.yukthimantra.com`) with cross-domain links configured via environment variables.
4. **Shared Token Contracts**: Shared styles and types reside under `packages/` to ensure visual consistency and type safety across current and future applications.
