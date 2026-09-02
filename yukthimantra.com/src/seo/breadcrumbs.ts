import { getCanonicalUrl } from './canonical';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Builds breadcrumb structures with normalized canonical URLs.
 */
export function buildBreadcrumbs(items: BreadcrumbItem[]) {
  return items.map((item) => ({
    name: item.name,
    url: getCanonicalUrl(item.path),
  }));
}
