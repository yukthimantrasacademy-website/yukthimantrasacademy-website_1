'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, EASE, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './LearnerActivityRibbon.module.css';
import { cn } from '@/lib/utils/cn';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export const LearnerActivityRibbon: React.FC = () => {
  const ribbonRef = useRef<HTMLElement>(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!isClient() || !ribbonRef.current) return;

    if (prefersReducedMotion()) {
      setCount1(50000);
      setCount2(15000);
      return;
    }

    const container = ribbonRef.current;
    const badges = container.querySelectorAll(`.${styles.tiltedBadge}`);

    const ctx = gsap.context(() => {
      // Trigger when this section enters the screen from bottom 25% (start: 'top 75%')
      ScrollTrigger.create({
        trigger: container,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          // 1. Stagger entrance of the tilted badges
          if (badges.length > 0) {
            gsap.fromTo(
              badges,
              { opacity: 0, scale: 0.8, y: 15 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'back.out(1.7)',
              }
            );
          }

          // 2. GSAP Number Counter
          const obj = { c1: 0, c2: 0 };
          gsap.to(obj, {
            c1: 50000,
            c2: 15000,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => {
              setCount1(Math.round(obj.c1));
              setCount2(Math.round(obj.c2));
            },
          });
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const triggerSparkles = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = ribbonRef.current?.getBoundingClientRect() || { left: 0, top: 0 };

    const originX = rect.left - parentRect.left + rect.width / 2;
    const originY = rect.top - parentRect.top + rect.height / 2;

    const newParticles: Particle[] = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      x: originX,
      y: originY,
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    // Playful elastic bounce on badge
    gsap.fromTo(
      e.currentTarget,
      { scale: 0.92 },
      { scale: 1.1, duration: 0.3, ease: 'elastic.out(1.2, 0.4)' }
    );

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
    }, 700);
  };

  return (
    <section ref={ribbonRef} className={styles.activityRibbonSection}>
      {/* Particle Sparks Overlay */}
      {particles.map((p) => (
        <span
          key={p.id}
          className={styles.sparkle}
          style={{ left: `${p.x}px`, top: `${p.y}px` }}
          ref={(el) => {
            if (el) {
              const angle = Math.random() * Math.PI * 2;
              const distance = 20 + Math.random() * 30;
              gsap.to(el, {
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                opacity: 0,
                scale: 0.2,
                duration: 0.55,
                ease: 'power2.out',
              });
            }
          }}
        />
      ))}

      <div className="container">
        <div className={styles.activityRibbonText}>
          <span>In last 30 days, students practiced</span>

          <span
            className={cn(styles.tiltedBadge, styles.badgeOne)}
            onClick={triggerSparkles}
            title="Click to interact"
          >
            <span className={styles.numberText}>{count1.toLocaleString()}+</span> Case Studies
          </span>

          <span>and evaluated</span>

          <span
            className={cn(styles.tiltedBadge, styles.badgeTwo)}
            onClick={triggerSparkles}
            title="Click to interact"
          >
            <span className={styles.numberText}>{count2.toLocaleString()}+</span> Clinical Datasets
          </span>

          <span>
            on <strong className={styles.activityBrandName}>YukthiMantra</strong>
          </span>
        </div>
      </div>
    </section>
  );
};
