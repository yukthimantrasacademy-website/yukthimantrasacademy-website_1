'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins safely on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Global GSAP defaults
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  });
}

export { gsap, ScrollTrigger };

/* ============================================================
   EASING CONSTANTS
   ============================================================ */
export const EASE = {
  /** Default for most animations */
  primary: 'power3.out',
  /** Secondary / subtle */
  secondary: 'power2.out',
  /** Continuous floating motion */
  float: 'sine.inOut',
  /** Special hero reveals */
  heroReveal: 'expo.out',
  /** Snappy interactions */
  snap: 'power2.inOut',
} as const;

/* ============================================================
   TIMING CONSTANTS (seconds)
   ============================================================ */
export const TIMING = {
  microHover: 0.2,
  buttonInteraction: 0.25,
  cardInteraction: 0.35,
  accordion: 0.35,
  navbarTransition: 0.4,
  sectionReveal: 0.75,
  heroEntrance: 0.9,
  pageTransition: 0.4,
  floatCycle: 3,
  backgroundMotion: 12,
} as const;

/* ============================================================
   SCROLL TRIGGER DEFAULTS
   ============================================================ */
export const SCROLL_DEFAULTS = {
  start: 'top 80%',
  once: true,
} as const;

/* ============================================================
   UTILITY: Checks if user prefers reduced motion
   ============================================================ */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ============================================================
   UTILITY: Safe check for SSR
   ============================================================ */
export function isClient(): boolean {
  return typeof window !== 'undefined';
}
