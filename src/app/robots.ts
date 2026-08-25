import type { MetadataRoute } from 'next';
import { getCanonicalUrl } from '@/seo/canonical';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: getCanonicalUrl('/sitemap.xml'),
  };
}
