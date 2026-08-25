'use client';

import { useEffect, useRef } from 'react';
import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';
import { createImageMaskReveal } from '@/animations/masks';

/**
 * Hook to apply image mask reveal animation to an element.
 * Triggers when the element scrolls into view.
 */
export function useImageMaskReveal<T extends HTMLElement = HTMLDivElement>(
  options?: {
    direction?: 'bottom' | 'left' | 'right';
    duration?: number;
    delay?: number;
    start?: string;
  }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!isClient() || !ref.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      createImageMaskReveal(ref.current!, {
        direction: options?.direction,
        duration: options?.duration,
        delay: options?.delay,
        start: options?.start,
      });
    });

    return () => ctx.revert();
  }, [options?.direction, options?.duration, options?.delay, options?.start]);

  return ref;
}
