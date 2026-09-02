# Shared Packages Guide

## Overview

The `packages/` directory holds reusable packages designed for consumption across the applications within the YukthiMantra monorepo.

## Available Packages

### 1. `@yukthimantra/design-system`
- **Location**: `packages/design-system`
- **Purpose**: Defines core visual tokens including colors, typography, border radii, shadows, and environment domain configurations.
- **Example Usage**:
  ```ts
  import { colors, typography } from '@yukthimantra/design-system';
  ```

### 2. `@yukthimantra/types`
- **Location**: `packages/types`
- **Purpose**: Shared domain TypeScript contracts such as `Programme`, `EventItem`, `MentorProfile`, `WaitlistSubmission`, and `SiteConfig`.
- **Example Usage**:
  ```ts
  import type { EventItem, MentorProfile } from '@yukthimantra/types';
  ```

### 3. `@yukthimantra/ui`
- **Location**: `packages/ui`
- **Purpose**: Shared UI component specifications (Buttons, Badges, Modals, Cards).

### 4. `@yukthimantra/utils`
- **Location**: `packages/utils`
- **Purpose**: Pure utility functions like `isValidEmail()`, `formatDate()`, and classname merge helpers `cn()`.

## Adding a New Package

1. Create a new directory under `packages/<package-name>`.
2. Add a `package.json` with appropriate name `@yukthimantra/<package-name>`.
3. Create `src/index.ts` exporting public APIs and types.
4. Add the package to the workspace configuration in root `package.json`.
