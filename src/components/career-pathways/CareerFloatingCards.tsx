'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Check, Timer, Clock } from 'lucide-react';
import { gsap, EASE, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './CareerFloatingCards.module.css';

export const CareerFloatingCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  // Dynamic Number Counter States
  const [task1Progress, setTask1Progress] = useState(0);
  const [task2Progress, setTask2Progress] = useState(0);
  const [integrationsCount, setIntegrationsCount] = useState(0);

  useEffect(() => {
    if (!isClient() || !containerRef.current) return;

    if (prefersReducedMotion()) {
      setTask1Progress(60);
      setTask2Progress(100);
      setIntegrationsCount(100);
      return;
    }

    const container = containerRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    const card4 = card4Ref.current;

    const ctx = gsap.context(() => {
      // Main 1-by-1 Staggered Timeline
      const masterTl = gsap.timeline({ delay: 0.25 });

      // CARD 1: Top-Left Yellow Note (Entrance at 0.0s)
      if (card1) {
        masterTl.fromTo(
          card1,
          { opacity: 0, y: 50, scale: 0.75, rotate: -20 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: -7,
            duration: 0.75,
            ease: 'back.out(1.8)',
          },
          0
        );

        const checkBadge = card1.querySelector(`.${styles.checkbox3D}`);
        if (checkBadge) {
          masterTl.fromTo(
            checkBadge,
            { scale: 0, rotation: -30 },
            { scale: 1, rotation: 6, duration: 0.5, ease: 'back.out(2.2)' },
            0.35
          );
        }
      }

      // CARD 2: Top-Right Reminders (Entrance at 0.35s)
      if (card2) {
        masterTl.fromTo(
          card2,
          { opacity: 0, y: -45, scale: 0.75, rotate: 22 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 8,
            duration: 0.75,
            ease: 'back.out(1.8)',
          },
          0.35
        );

        const stopwatch = card2.querySelector(`.${styles.stopwatch3D}`);
        if (stopwatch) {
          masterTl.fromTo(
            stopwatch,
            { scale: 0, rotation: 35 },
            { scale: 1, rotation: -10, duration: 0.5, ease: 'back.out(2.2)' },
            0.65
          );
        }
      }

      // CARD 3: Bottom-Left Today's Tasks + Progress Loading & Number Counters (Entrance at 0.7s)
      if (card3) {
        masterTl.fromTo(
          card3,
          { opacity: 0, y: 55, scale: 0.75, rotate: -18 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: -5,
            duration: 0.75,
            ease: 'back.out(1.8)',
          },
          0.7
        );

        // Loading animation & Number Counters for Tasks
        masterTl.add(() => {
          // Task 1: 0% -> 60%
          const obj1 = { val: 0 };
          gsap.to(obj1, {
            val: 60,
            duration: 1.4,
            ease: 'power2.out',
            onUpdate: () => setTask1Progress(Math.round(obj1.val)),
          });

          // Task 2: 0% -> 100%
          const obj2 = { val: 0 };
          gsap.to(obj2, {
            val: 100,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => setTask2Progress(Math.round(obj2.val)),
          });
        }, 0.9);
      }

      // CARD 4: Bottom-Right 100+ Integrations + Number Counter & Tool Pop (Entrance at 1.05s)
      if (card4) {
        masterTl.fromTo(
          card4,
          { opacity: 0, y: 55, scale: 0.75, rotate: 20 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 6,
            duration: 0.75,
            ease: 'back.out(1.8)',
          },
          1.05
        );

        // Integrations Number Counter: 0 -> 100
        masterTl.add(() => {
          const obj3 = { val: 0 };
          gsap.to(obj3, {
            val: 100,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => setIntegrationsCount(Math.round(obj3.val)),
          });
        }, 1.25);

        // Tool icons pop in 1 by 1
        const tools = card4.querySelectorAll(`.${styles.toolIconSquare}`);
        if (tools.length > 0) {
          masterTl.fromTo(
            tools,
            { scale: 0, opacity: 0, y: 10 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.12,
              ease: 'back.out(2)',
            },
            1.35
          );
        }
      }

      // Start continuous organic floating for each card independently
      const cards = [
        { el: card1, yAmp: 7, dur: 3.4, rotAmp: 1.5 },
        { el: card2, yAmp: 8, dur: 3.8, rotAmp: -1.5 },
        { el: card3, yAmp: 6, dur: 4.2, rotAmp: 1.2 },
        { el: card4, yAmp: 7, dur: 4.5, rotAmp: -1.2 },
      ];

      cards.forEach(({ el, yAmp, dur, rotAmp }, idx) => {
        if (el) {
          gsap.to(el, {
            y: `-=${yAmp}`,
            duration: dur,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 1.8 + idx * 0.25,
          });
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.floatingContainer}>
      {/* 1. TOP-LEFT FLOATING WIDGET: YELLOW PINNED NOTE + 3D CHECKBOX */}
      <div ref={card1Ref} className={`${styles.floatingWidget} ${styles.widgetTopLeft}`}>
        <div className={styles.yellowNote}>
          <div className={styles.pinWrapper}>
            <div className={styles.redPin} />
          </div>
          <p className={styles.noteText}>
            Map your degree to real-world healthcare analytics and medical coding roles with ease.
          </p>
        </div>
        <div className={styles.checkbox3D}>
          <div className={styles.checkInner}>
            <Check size={16} strokeWidth={3.5} className={styles.checkIconBlue} />
          </div>
        </div>
      </div>

      {/* 2. TOP-RIGHT FLOATING WIDGET: REMINDERS + 3D STOPWATCH */}
      <div ref={card2Ref} className={`${styles.floatingWidget} ${styles.widgetTopRight}`}>
        <div className={styles.remindersCard}>
          <div className={styles.reminderHeaderRow}>
            <span className={styles.reminderHeading}>Reminders</span>
            <span className={styles.livePulseDot} />
          </div>
          <div className={styles.reminderBody}>
            <span className={styles.reminderTitle}>Upcoming Batch</span>
            <span className={styles.reminderSubtitle}>Admissions Counselling Call</span>
            <div className={styles.reminderTimePill}>
              <Clock size={11} />
              <span>10:00 - 11:30</span>
            </div>
          </div>
        </div>
        <div className={styles.stopwatch3D}>
          <Timer size={22} className={styles.stopwatchIcon} />
        </div>
      </div>

      {/* 3. BOTTOM-LEFT FLOATING WIDGET: TODAY'S TASKS / PROGRESS WITH LOADING ANIMATION & NUMBER COUNTERS */}
      <div ref={card3Ref} className={`${styles.floatingWidget} ${styles.widgetBottomLeft}`}>
        <div className={styles.tasksCard}>
          <div className={styles.tasksHeader}>
            <span className={styles.tasksTitle}>Today&apos;s tasks</span>
            <div className={styles.loadingBadge}>
              <span className={styles.spinDot} />
              <span>In Progress</span>
            </div>
          </div>

          <div className={styles.taskItem}>
            <div className={styles.taskMeta}>
              <div className={styles.taskNameRow}>
                <span className={styles.taskDotOrange} />
                <span className={styles.taskName}>Clinical Data Extraction</span>
              </div>
              <span className={styles.taskPercent}>{task1Progress}%</span>
            </div>
            <div className={styles.progressBarBg}>
              <div
                className={styles.progressBarFillCyan}
                style={{ width: `${task1Progress}%` }}
              />
            </div>
          </div>

          <div className={styles.taskItem}>
            <div className={styles.taskMeta}>
              <div className={styles.taskNameRow}>
                <span className={styles.taskDotGreen} />
                <span className={styles.taskName}>ICD-10 Case Study #4</span>
              </div>
              <span className={styles.taskPercent}>{task2Progress}%</span>
            </div>
            <div className={styles.progressBarBg}>
              <div
                className={styles.progressBarFillGreen}
                style={{ width: `${task2Progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM-RIGHT FLOATING WIDGET: 100+ INTEGRATIONS WITH NUMBER COUNTER & TOOL POPS */}
      <div ref={card4Ref} className={`${styles.floatingWidget} ${styles.widgetBottomRight}`}>
        <div className={styles.integrationsCard}>
          <div className={styles.integrationsHeader}>
            <span className={styles.integrationsHeading}>
              {integrationsCount}+ Integrations
            </span>
          </div>
          <div className={styles.integrationIconsRow}>
            <div className={styles.toolIconSquare}>
              <span className={styles.toolTextPython}>Py</span>
            </div>
            <div className={styles.toolIconSquare}>
              <span className={styles.toolTextSql}>SQL</span>
            </div>
            <div className={styles.toolIconSquare}>
              <span className={styles.toolTextEhr}>EHR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
