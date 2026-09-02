# YukthiMantra Shared Packages

This directory contains shared packages for the YukthiMantra Academy multi-application ecosystem.

## Packages

| Package | Path | Description |
| :--- | :--- | :--- |
| **`@yukthimantra/types`** | `packages/types` | Shared TypeScript interfaces and domain types |
| **`@yukthimantra/design-system`** | `packages/design-system` | Design tokens, color palettes, typography, and constants |
| **`@yukthimantra/ui`** | `packages/ui` | Reusable UI component contracts |
| **`@yukthimantra/utils`** | `packages/utils` | Shared utility and validation helpers |

## Architecture & Sharing Strategy

Applications (`yukthimantra.com`, `app.yukthimantra.com`, `events.yukthimantra.com`) remain independently deployable to Vercel without requiring complex bundler toolchains or Turborepo. As components mature, they can be extracted and referenced here.
