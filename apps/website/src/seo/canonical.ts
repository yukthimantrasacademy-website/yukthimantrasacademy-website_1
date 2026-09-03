import { siteConfig } from '@/lib/config/site';

/**
 * Returns the base public site URL stripped of any trailing slash.
 */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url || 'https://yukthimantrasacademy.com';
  return url.replace(/\/+$/, '');
}

/**
 * Generates a normalized, self-referencing absolute canonical URL.
 * Normalizes leading slashes, trailing slashes, and lowercase paths.
 */
export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = getSiteUrl();
  if (!path || path === '/') {
    return baseUrl;
  }

  // Normalize path to have a single leading slash and no trailing slash
  const cleanPath = path.trim().toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '');
  return `${baseUrl}/${cleanPath}`;
}
