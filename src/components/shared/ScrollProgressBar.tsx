'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './ScrollProgressBar.module.css';

export const ScrollProgressBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isClient() || prefersReducedMotion() || !barRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return <div ref={barRef} className={styles.progressBar} />;
};
