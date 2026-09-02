'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

export const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isClient() || !wrapperRef.current || prefersReducedMotion()) return;

    // Skip animation on initial load (hero handles its own entrance)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // On route change: quick fade-in + slight y shift
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: TIMING.pageTransition,
          ease: EASE.primary,
        }
      );
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div ref={wrapperRef}>
      {children}
    </div>
  );
};
