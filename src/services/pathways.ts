/**
 * Pathways Service Layer
 */

import { pathwayCategories } from '@/data/pathways';
import type { PathwayCategory, CareerPathway } from '@/types/pathway';

/** Get all pathway categories */
export async function getPathwayCategories(): Promise<PathwayCategory[]> {
  return pathwayCategories;
}

/** Get a specific pathway by ID */
export async function getPathwayById(id: string): Promise<CareerPathway | undefined> {
  for (const category of pathwayCategories) {
    const found = category.pathways.find((p) => p.id === id);
    if (found) return found;
  }
  return undefined;
}
