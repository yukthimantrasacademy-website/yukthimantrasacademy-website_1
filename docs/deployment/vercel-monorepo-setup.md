# Vercel Monorepo Deployment Guide

This guide walks through configuring three distinct Vercel projects pointing to the same single GitHub repository [`yukthimantrasacademy-website_1`](https://github.com/yukthimantrasacademy-website/yukthimantrasacademy-website_1.git).

---

## 1. Main Website (`yukthimantra.com`)

### Existing Vercel Project Update
1. Open your existing project in the **Vercel Dashboard**.
2. Navigate to **Settings** → **General** → **Root Directory**.
3. Click **Edit**, enter `yukthimantra.com`, and click **Save**.
4. Check **Include source files outside of the Root Directory in the Build Step** if prompted (default is checked).
5. Trigger a deployment by clicking **Deployments** → **Redeploy** on the latest commit.

---

## 2. Academy Platform (`app.yukthimantra.com`)

### Create New Project
1. In the Vercel Dashboard, click **Add New...** → **Project**.
2. Import the existing repository: `yukthimantrasacademy-website_1`.
3. Set **Project Name**: `yukthimantra-platform`.
4. In the **Root Directory** field, click **Edit** and select or type: `app.yukthimantra.com`.
5. Under **Framework Preset**, ensure **Next.js** is selected.
6. Under **Environment Variables**, optionally set:
   - `NEXT_PUBLIC_MAIN_SITE_URL`: `https://yukthimantra.com`
   - `NEXT_PUBLIC_EVENTS_SITE_URL`: `https://events.yukthimantra.com`
7. Click **Deploy**.
8. After initial build completes, go to **Settings** → **Domains** and add `app.yukthimantra.com`.

---

## 3. Events Website (`events.yukthimantra.com`)

### Create New Project
1. In the Vercel Dashboard, click **Add New...** → **Project**.
2. Import the existing repository: `yukthimantrasacademy-website_1`.
3. Set **Project Name**: `yukthimantra-events`.
4. In the **Root Directory** field, click **Edit** and select or type: `events.yukthimantra.com`.
5. Under **Framework Preset**, ensure **Next.js** is selected.
6. Under **Environment Variables**, optionally set:
   - `NEXT_PUBLIC_MAIN_SITE_URL`: `https://yukthimantra.com`
   - `NEXT_PUBLIC_APP_SITE_URL`: `https://app.yukthimantra.com`
7. Click **Deploy**.
8. After initial build completes, go to **Settings** → **Domains** and add `events.yukthimantra.com`.

---

## Verification Matrix

| Domain | Vercel Project | Root Directory | Status |
| :--- | :--- | :--- | :--- |
| `yukthimantra.com` | Existing project | `yukthimantra.com` | Production Live |
| `app.yukthimantra.com` | `yukthimantra-platform` | `app.yukthimantra.com` | Coming Soon |
| `events.yukthimantra.com` | `yukthimantra-events` | `events.yukthimantra.com` | Coming Soon |
