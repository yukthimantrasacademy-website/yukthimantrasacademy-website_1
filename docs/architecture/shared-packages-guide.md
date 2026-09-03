# Shared Packages Guide

## Overview

The `packages/` directory holds reusable packages consumed across the applications (`apps/website`, `apps/platform`, `apps/events`) within the YukthiMantra monorepo.

## Available Packages

### 1. `@yukthimantra/design-system`
- **Location**: `packages/design-system`
- **Purpose**: Defines core visual tokens including brand palettes, typography, spacing, border radii, shadows, animations, and responsive breakpoints.
- **Example Usage**:
  ```ts
  import { colors, typography, spacing, shadows } from '@yukthimantra/design-system';
  ```

### 2. `@yukthimantra/types`
- **Location**: `packages/types`
- **Purpose**: Shared domain TypeScript contracts including `Programme`, `CurriculumModule`, `CareerPathway`, `EventItem`, `MentorProfile`, `CandidateProfile`, `CounsellingFormData`, and `SiteConfig`.
- **Example Usage**:
  ```ts
  import type { Programme, EventItem, CounsellingFormData } from '@yukthimantra/types';
  ```

### 3. `@yukthimantra/ui`
- **Location**: `packages/ui`
- **Purpose**: Shared reusable UI component primitives:
  - `<Button variant="primary" size="md">`
  - `<Badge label="New" variant="accent">`
  - `<Card elevated={true}>`
  - `<Modal isOpen={isOpen} onClose={...} title="...">`
  - `<Accordion items={...}>`
- **Example Usage**:
  ```tsx
  import { Button, Badge, Card, Modal, Accordion } from '@yukthimantra/ui';
  ```

### 4. `@yukthimantra/config`
- **Location**: `packages/config`
- **Purpose**: Centralized domain constants, brand identity strings, environment helpers (`isProduction`, `getAppBaseUrl`), and contact information.
- **Example Usage**:
  ```ts
  import { DOMAINS, BRAND, CONTACT_INFO, getAppBaseUrl } from '@yukthimantra/config';
  ```

### 5. `@yukthimantra/utils`
- **Location**: `packages/utils`
- **Purpose**: Pure utility routines:
  - `cn(...classes)`
  - `isValidEmail(email)`
  - `isValidPhone(phone)`
  - `formatDate(date)`
  - `formatDuration(duration)`
  - `slugify(text)`
  - `truncate(text, length)`
- **Example Usage**:
  ```ts
  import { cn, isValidEmail, isValidPhone, slugify } from '@yukthimantra/utils';
  ```

### 6. `@yukthimantra/api-client`
- **Location**: `packages/api-client`
- **Purpose**: Typed client abstraction layer for submitting admissions leads, waitlist signups, and contact forms with resilient fallbacks.
- **Example Usage**:
  ```ts
  import { apiClient } from '@yukthimantra/api-client';

  const result = await apiClient.submitCounselling(formData);
  ```

---

## Workspace Integration

Packages are consumed by applications via pnpm workspace protocols:
```json
{
  "dependencies": {
    "@yukthimantra/config": "workspace:*",
    "@yukthimantra/design-system": "workspace:*",
    "@yukthimantra/types": "workspace:*",
    "@yukthimantra/ui": "workspace:*",
    "@yukthimantra/utils": "workspace:*",
    "@yukthimantra/api-client": "workspace:*"
  }
}
```
And configured in `next.config.ts`:
```ts
transpilePackages: [
  '@yukthimantra/api-client',
  '@yukthimantra/config',
  '@yukthimantra/design-system',
  '@yukthimantra/types',
  '@yukthimantra/ui',
  '@yukthimantra/utils',
]
```
