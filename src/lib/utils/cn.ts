/**
 * Simple class-name concatenation utility.
 * Filters falsy values so conditional classes work cleanly.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
