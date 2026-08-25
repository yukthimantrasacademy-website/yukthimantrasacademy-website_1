'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';

interface ScrollAnimationOptions {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  selector?: string; // If targeting children
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options?: ScrollAnimationOptions
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!isClient() || !ref.current || prefersReducedMotion()) return;

    const yOffset = options?.y ?? 30;
    const duration = options?.duration ?? TIMING.sectionReveal;
    const delay = options?.delay ?? 0;
    const stagger = options?.stagger ?? 0.12;
    const start = options?.start ?? 'top 85%';

    const target = options?.selector
      ? ref.current.querySelectorAll(options.selector)
      : ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        target as gsap.TweenTarget,
        { opacity: 0, y: yOffset },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: EASE.primary,
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [options?.y, options?.duration, options?.delay, options?.stagger, options?.start, options?.selector]);

  return ref;
}
