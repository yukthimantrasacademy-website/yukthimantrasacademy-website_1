import type { MetadataRoute } from 'next';
import { getAllProgrammeSlugs } from '@/services/programmes';
import { getCanonicalUrl } from '@/seo/canonical';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllProgrammeSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: getCanonicalUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: getCanonicalUrl('/programmes'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: getCanonicalUrl('/career-pathways'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: getCanonicalUrl('/eligibility'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: getCanonicalUrl('/admission-counselling'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: getCanonicalUrl('/about'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: getCanonicalUrl('/career-support'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: getCanonicalUrl('/contact'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ];

  const programmeRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: getCanonicalUrl(`/programmes/${slug}`),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...programmeRoutes];
}
