# YukthiMantra Shared Packages

This directory contains shared packages for the YukthiMantra Academy multi-application ecosystem.

## Packages

| Package | Path | Description |
| :--- | :--- | :--- |
| **`@yukthimantra/types`** | `packages/types` | Shared TypeScript domain types, programme interfaces, and API contracts |
| **`@yukthimantra/design-system`** | `packages/design-system` | Design tokens, brand palettes, typography, spacing, and animations |
| **`@yukthimantra/ui`** | `packages/ui` | Reusable UI component primitives (Button, Badge, Card, Modal, Accordion) |
| **`@yukthimantra/config`** | `packages/config` | Centralized domain constants, brand parameters, and environment helpers |
| **`@yukthimantra/utils`** | `packages/utils` | Shared validation helpers, formatters, and utility routines |
| **`@yukthimantra/api-client`** | `packages/api-client` | Typed API client abstraction for leads, counselling, and event intake |

## Architecture & Sharing Strategy

Applications (`apps/website`, `apps/platform`, `apps/events`) consume these packages via pnpm workspace protocols (`workspace:*`) and Next.js `transpilePackages`. Each application remains independently deployable to Vercel with zero cross-app runtime coupling.
