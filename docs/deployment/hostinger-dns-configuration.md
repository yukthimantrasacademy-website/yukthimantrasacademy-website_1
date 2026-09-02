# Hostinger DNS Configuration Guide

## Overview

This guide explains how to point subdomains to Vercel without altering or risking existing apex DNS records, SSL certs, or business email configurations (MX/TXT).

---

## What Changes vs What Remains Untouched

### Remains Untouched (DO NOT MODIFY)
- Apex `A` and `AAAA` records for `yukthimantra.com`
- `www` CNAME records
- `MX` records (e.g., Google Workspace / Hostinger Titan Mail)
- `TXT` records (SPF, DKIM, DMARC, site verifications)

### New Records to Add
Only add two new **CNAME** records in your Hostinger DNS Zone Management console:

| Type | Name / Host | Points to / Target | TTL |
| :--- | :--- | :--- | :--- |
| `CNAME` | `app` | `cname.vercel-dns.com` *(or project-specific target from Vercel)* | 3600 (or Auto) |
| `CNAME` | `events` | `cname.vercel-dns.com` *(or project-specific target from Vercel)* | 3600 (or Auto) |

---

## Step-by-Step in Hostinger Control Panel

1. Log into your **Hostinger Dashboard** (hPanel).
2. Go to **Domains** → Select `yukthimantra.com` → Click **DNS / Nameservers**.
3. Under **Manage DNS records**:
   - **Type**: Select `CNAME`
   - **Name**: Enter `app`
   - **Target**: Enter `cname.vercel-dns.com` (or target specified in Vercel project domain settings)
   - **TTL**: `3600`
   - Click **Add Record**.
4. Repeat for the events subdomain:
   - **Type**: Select `CNAME`
   - **Name**: Enter `events`
   - **Target**: Enter `cname.vercel-dns.com`
   - **TTL**: `3600`
   - Click **Add Record**.
5. Return to the respective Vercel project's **Domains** tab and click **Refresh** / verify. SSL certificates are issued automatically by Vercel via Let's Encrypt within 1–5 minutes.
