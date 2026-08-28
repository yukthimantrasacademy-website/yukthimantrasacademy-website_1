'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Clock, Lightbulb } from '@/components/icons/GoogleIcons';
import { gsap, ScrollTrigger, EASE, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './PlayfulAboutHeadline.module.css';
import { cn } from '@/lib/utils/cn';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
}

export const PlayfulAboutHeadline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const clockBtnRef = useRef<HTMLButtonElement>(null);
  const bulbBtnRef = useRef<HTMLButtonElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  // 1. GSAP Scroll Entrance & Breathing Animation on Icons Only
  useEffect(() => {
    if (!isClient() || !containerRef.current || prefersReducedMotion()) return;

    const container = containerRef.current;
    const icons = container.querySelectorAll(`.${styles.iconButton}`);
    const words = container.querySelectorAll(`.${styles.animWord}`);

    const ctx = gsap.context(() => {
      // Entrance reveal on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          once: true,
        },
      });

      if (words.length > 0) {
        tl.fromTo(
          words,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.03, ease: EASE.primary }
        );
      }

      if (icons.length > 0) {
        tl.fromTo(
          icons,
          { scale: 0, rotation: -45, opacity: 0 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'back.out(2)',
          },
          '-=0.3'
        );

        // Idle gentle breathing micro-interaction on icons only
        icons.forEach((icon, i) => {
          gsap.to(icon, {
            y: i % 2 === 0 ? -3 : 3,
            duration: 2.2 + i * 0.4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  // 2. Playful Particle Burst on Icon Click
  const triggerBurst = (e: React.MouseEvent<HTMLElement>, color: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 };

    const originX = rect.left - parentRect.left + rect.width / 2;
    const originY = rect.top - parentRect.top + rect.height / 2;

    const newParticles: Particle[] = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: originX,
      y: originY,
      color,
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    // Animate target button with playful squash/stretch
    gsap.fromTo(
      e.currentTarget,
      { scale: 0.8 },
      { scale: 1.25, duration: 0.35, ease: 'elastic.out(1.2, 0.4)' }
    );

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
    }, 800);
  };

  return (
    <div ref={containerRef} className={styles.headlineWrapper}>
      {/* Particle Sparks Canvas Overlay */}
      {particles.map((p) => (
        <span
          key={p.id}
          className={styles.sparkleParticle}
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
          }}
          ref={(el) => {
            if (el) {
              const angle = Math.random() * Math.PI * 2;
              const distance = 25 + Math.random() * 35;
              gsap.to(el, {
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                opacity: 0,
                scale: 0.2,
                duration: 0.65,
                ease: 'power2.out',
              });
            }
          }}
        />
      ))}

      <h2 className={styles.headlineText}>
        <span className={styles.animWord}>A </span>
        <span className={styles.animWord}>career-focused </span>
        <span className={cn(styles.animWord, styles.wordItalic)}>academy </span>
        <span className={styles.animWord}>dedicated </span>
        <span className={styles.animWord}>to </span>
        <span className={styles.animWord}>building </span>

        {/* 1. CLOCK ICON ONLY (ANIMATED) */}
        <button
          ref={clockBtnRef}
          type="button"
          className={cn(styles.iconButton, styles.iconClock)}
          onClick={(e) => triggerBurst(e, '#38bdf8')}
          aria-label="Fast-track training"
          title="Fast-track 11+ Tracks"
        >
          <Clock size={16} className={styles.clockSvg} />
        </button>

        {/* PROPERLY ALIGNED INLINE TEXT */}
        <span className={styles.headlineText}>smarter</span>
        <span className={styles.headlineText}> and </span>

        {/* 2. LIGHTBULB ICON ONLY (ANIMATED) */}
        <button
          ref={bulbBtnRef}
          type="button"
          className={cn(styles.iconButton, styles.iconBulb, styles.iconBulbMargin)}
          onClick={(e) => triggerBurst(e, '#c0f050')}
          aria-label="AI-adaptive learning"
          title="AI-Powered Curriculum"
        >
          <div className={styles.bulbRays} />
          <Lightbulb size={16} className={styles.bulbSvg} />
        </button>

        {/* PROPERLY ALIGNED INLINE MUTED TEXT */}
        <span className={styles.headlineText}>more adaptive <span className={styles.wordItalic}>healthcare-tech</span> leaders</span>
      </h2>
    </div>
  );
};
