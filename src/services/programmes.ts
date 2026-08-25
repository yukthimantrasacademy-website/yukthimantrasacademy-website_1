/**
 * Programme Service Layer
 *
 * Current: reads from typed local data.
 * Future: replace with API client calls without changing the interface.
 */

import { programmes } from '@/data/programmes';
import type { Programme, ProgrammeCategory } from '@/types/programme';

/** Get all active programmes */
export async function getProgrammes(): Promise<Programme[]> {
  // Future: return apiClient.get('/programmes');
  return programmes.filter((p) => p.status === 'active');
}

/** Get a single programme by slug */
export async function getProgrammeBySlug(slug: string): Promise<Programme | undefined> {
  // Future: return apiClient.get(`/programmes/${slug}`);
  return programmes.find((p) => p.slug === slug && p.status === 'active');
}

/** Get all programme slugs (for static generation) */
export async function getAllProgrammeSlugs(): Promise<string[]> {
  return programmes.filter((p) => p.status === 'active').map((p) => p.slug);
}

/** Get featured programmes */
export async function getFeaturedProgrammes(): Promise<Programme[]> {
  return programmes.filter((p) => p.isFeatured && p.status === 'active');
}

/** Get programmes by group */
export async function getProgrammesByGroup(group: 'Group A' | 'Group B'): Promise<Programme[]> {
  return programmes.filter((p) => p.group === group && p.status === 'active');
}

/** Get related programmes based on category, pathway, or group */
export async function getRelatedProgrammes(slug: string, limit: number = 3): Promise<Programme[]> {
  const current = programmes.find((p) => p.slug === slug);
  if (!current) return [];

  const candidates = programmes.filter((p) => p.slug !== slug && p.status === 'active');

  // Priority 1: Same category or pathway
  const sameCategoryOrPathway = candidates.filter(
    (p) => p.category === current.category || p.careerPathway === current.careerPathway
  );

  // Priority 2: Same group
  const sameGroup = candidates.filter(
    (p) => p.group === current.group && !sameCategoryOrPathway.includes(p)
  );

  // Combine and slice
  const combined = [...sameCategoryOrPathway, ...sameGroup, ...candidates];
  const unique = Array.from(new Set(combined));

  return unique.slice(0, limit);
}

/** Search programmes by query string */
export function searchProgrammes(allProgrammes: Programme[], query: string): Programme[] {
  if (!query.trim()) return allProgrammes;
  const lower = query.toLowerCase();
  return allProgrammes.filter(
    (p) =>
      p.title.toLowerCase().includes(lower) ||
      p.summary.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower) ||
      p.careerPathway.toLowerCase().includes(lower) ||
      p.learningAreas.some((area) => area.toLowerCase().includes(lower)) ||
      p.toolsAndTechnologies.some((tool) => tool.toLowerCase().includes(lower)) ||
      p.careerOutcomes.some((outcome) => outcome.toLowerCase().includes(lower))
  );
}

/** Filter programmes by criteria */
export function filterProgrammes(
  allProgrammes: Programme[],
  filters: {
    category?: ProgrammeCategory | '';
    group?: 'Group A' | 'Group B' | '';
    careerPathway?: string;
  }
): Programme[] {
  let results = allProgrammes;

  if (filters.category) {
    results = results.filter((p) => p.category === filters.category);
  }
  if (filters.group) {
    results = results.filter((p) => p.group === filters.group);
  }
  if (filters.careerPathway) {
    results = results.filter((p) => p.careerPathway === filters.careerPathway);
  }

  return results;
}
