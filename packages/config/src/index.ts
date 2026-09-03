/**
 * YukthiMantra Academy - Shared Monorepo Configuration & Environment Helpers
 */

export const DOMAINS = {
  main: 'yukthimantrasacademy.com',
  app: 'app.yukthimantrasacademy.com',
  events: 'events.yukthimantrasacademy.com',
} as const;

export const URLS = {
  production: {
    website: 'https://yukthimantrasacademy.com',
    platform: 'https://app.yukthimantrasacademy.com',
    events: 'https://events.yukthimantrasacademy.com',
  },
  development: {
    website: 'http://localhost:3000',
    platform: 'http://localhost:3001',
    events: 'http://localhost:3002',
  },
} as const;

export const BRAND = {
  parent: 'YukthiMantra',
  academy: "Yukthimantra's Academy",
  legalEntity: 'YukthiMantra Technologies Pvt Ltd',
  tagline: 'Technology + Healthcare Career Programmes',
  positioning: 'Career discovery and admission-support platform connecting technology and healthcare',
} as const;

export const CONTACT_INFO = {
  email: 'info@yukthimantrasacademy.com',
  securityEmail: 'security@yukthimantrasacademy.com',
  phone: '+91 XXXXX XXXXX',
  whatsapp: '+91 XXXXX XXXXX',
  address: 'Hyderabad, Telangana, India',
  businessHours: 'Mon – Sat: 9:00 AM – 6:00 PM IST',
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yukthimantra',
  youtube: 'https://youtube.com/@yukthimantra',
  instagram: 'https://instagram.com/yukthimantra',
  twitter: 'https://twitter.com/yukthimantra',
} as const;

/**
 * Checks if the current execution environment is production
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * Checks if the current execution environment is development
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

/**
 * Resolves the absolute base URL for a given application
 */
export function getAppBaseUrl(app: 'website' | 'platform' | 'events'): string {
  if (app === 'website') {
    return process.env.NEXT_PUBLIC_MAIN_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || URLS.production.website;
  }
  if (app === 'platform') {
    return process.env.NEXT_PUBLIC_APP_SITE_URL || URLS.production.platform;
  }
  if (app === 'events') {
    return process.env.NEXT_PUBLIC_EVENTS_SITE_URL || URLS.production.events;
  }
  return URLS.production.website;
}

/**
 * Site configuration object
 */
export const siteConfig = {
  name: BRAND.academy,
  brand: BRAND.parent,
  tagline: BRAND.tagline,
  description:
    'Career-focused programmes at the intersection of technology and healthcare. For graduates and students pursuing graduation.',
  url: URLS.production.website,
  platformUrl: URLS.production.platform,
  eventsUrl: URLS.production.events,
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '',
  contact: CONTACT_INFO,
  social: SOCIAL_LINKS,
  businessHours: CONTACT_INFO.businessHours,
} as const;
