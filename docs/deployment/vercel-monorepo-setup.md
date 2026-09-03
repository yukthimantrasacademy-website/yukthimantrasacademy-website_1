# Vercel Monorepo Deployment Guide

This guide walks through configuring three distinct Vercel projects pointing to the same single GitHub repository [`yukthimantrasacademy-website_1`](https://github.com/yukthimantrasacademy-website/yukthimantrasacademy-website_1.git).

---

## 1. Main Website (`yukthimantrasacademy.com`)

### Vercel Project Configuration
1. Open your project in the **Vercel Dashboard**.
2. Navigate to **Settings** → **General** → **Root Directory**.
3. Click **Edit**, enter `apps/website`, and click **Save**.
4. Ensure **Include source files outside of the Root Directory in the Build Step** is checked (this allows access to `packages/*`).
5. Trigger a deployment by clicking **Deployments** → **Redeploy** on the latest commit.

---

## 2. Academy Platform (`app.yukthimantrasacademy.com`)

### Create / Configure Project
1. In the Vercel Dashboard, click **Add New...** → **Project**.
2. Import the existing repository: `yukthimantrasacademy-website_1`.
3. Set **Project Name**: `yukthimantra-platform`.
4. In the **Root Directory** field, click **Edit** and set: `apps/platform`.
5. Under **Framework Preset**, ensure **Next.js** is selected.
6. Under **Environment Variables**, optionally set:
   - `NEXT_PUBLIC_MAIN_SITE_URL`: `https://yukthimantrasacademy.com`
   - `NEXT_PUBLIC_EVENTS_SITE_URL`: `https://events.yukthimantrasacademy.com`
7. Click **Deploy**.
8. After initial build completes, go to **Settings** → **Domains** and add `app.yukthimantrasacademy.com`.

---

## 3. Events Website (`events.yukthimantrasacademy.com`)

### Create / Configure Project
1. In the Vercel Dashboard, click **Add New...** → **Project**.
2. Import the existing repository: `yukthimantrasacademy-website_1`.
3. Set **Project Name**: `yukthimantra-events`.
4. In the **Root Directory** field, click **Edit** and set: `apps/events`.
5. Under **Framework Preset**, ensure **Next.js** is selected.
6. Under **Environment Variables**, optionally set:
   - `NEXT_PUBLIC_MAIN_SITE_URL`: `https://yukthimantrasacademy.com`
   - `NEXT_PUBLIC_APP_SITE_URL`: `https://app.yukthimantrasacademy.com`
7. Click **Deploy**.
8. After initial build completes, go to **Settings** → **Domains** and add `events.yukthimantrasacademy.com`.

---

## Verification Matrix

| Domain | Vercel Project | Root Directory | Status |
| :--- | :--- | :--- | :--- |
| `yukthimantrasacademy.com` | `yukthimantra-website` | `apps/website` | Production Live |
| `app.yukthimantrasacademy.com` | `yukthimantra-platform` | `apps/platform` | Candidate / Mentor Platform |
| `events.yukthimantrasacademy.com` | `yukthimantra-events` | `apps/events` | Events & Masterclasses |
