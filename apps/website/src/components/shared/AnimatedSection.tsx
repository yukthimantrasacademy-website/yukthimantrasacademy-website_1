'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Y offset to animate from (default: 40) */
  y?: number;
  /** Stagger between children (default: 0.08) */
  stagger?: number;
  /** ScrollTrigger start (default: 'top 80%') */
  start?: string;
  /** Whether to animate the container itself or its direct children */
  animateChildren?: boolean;
  /** HTML tag to render (default: 'div') */
  as?: 'div' | 'section';
  /** Optional id for anchor links */
  id?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  y = 40,
  stagger = 0.08,
  start = 'top 80%',
  animateChildren = true,
  as: Tag = 'div',
  id,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isClient() || !ref.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const targets = animateChildren
        ? Array.from(ref.current!.children)
        : [ref.current!];

      if (targets.length === 0) return;

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: TIMING.sectionReveal,
          stagger: animateChildren ? stagger : 0,
          ease: EASE.primary,
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y, stagger, start, animateChildren]);

  return (
    <Tag ref={ref as any} className={className} id={id}>
      {children}
    </Tag>
  );
};
