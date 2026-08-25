'use client';

import { useEffect, useRef } from 'react';
import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';
import { createStaggeredGrid } from '@/animations/interactions';

/**
 * Hook to apply staggered grid entrance animation.
 * Animates child elements with opacity + y + scale stagger.
 */
export function useStaggeredGrid<T extends HTMLElement = HTMLDivElement>(
  options?: {
    selector?: string;
    y?: number;
    duration?: number;
    stagger?: number;
    start?: string;
  }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!isClient() || !ref.current || prefersReducedMotion()) return;

    const container = ref.current;
    const elements = options?.selector
      ? container.querySelectorAll(options.selector)
      : container.children;

    if (!elements || elements.length === 0) return;

    const ctx = gsap.context(() => {
      createStaggeredGrid(elements as NodeListOf<Element>, {
        y: options?.y,
        duration: options?.duration,
        stagger: options?.stagger,
        start: options?.start,
        container,
      });
    });

    return () => ctx.revert();
  }, [options?.selector, options?.y, options?.duration, options?.stagger, options?.start]);

  return ref;
}
