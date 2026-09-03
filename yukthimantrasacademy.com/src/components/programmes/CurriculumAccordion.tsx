'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Play, FileText, CheckCircle, Info } from '@/components/icons/GoogleIcons';
import type { CurriculumModule } from '@/types/programme';
import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './CurriculumAccordion.module.css';
import { cn } from '@/lib/utils/cn';

interface CurriculumAccordionProps {
  modules: CurriculumModule[];
}

/** Single curriculum module with GSAP-driven accordion */
const CurriculumModule: React.FC<{
  mod: CurriculumModule;
  idx: number;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ mod, idx, isOpen, onToggle }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);
  const formattedPhase = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;

  useEffect(() => {
    if (!isClient() || !panelRef.current || !contentRef.current) return;

    const panel = panelRef.current;
    const content = contentRef.current;
    const chevron = chevronRef.current;
    const duration = TIMING.accordion;

    if (prefersReducedMotion()) {
      panel.style.height = isOpen ? 'auto' : '0px';
      panel.style.overflow = 'hidden';
      content.style.opacity = isOpen ? '1' : '0';
      if (chevron) chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      return;
    }

    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.set(panel, { height: 'auto', overflow: 'hidden' });
        const naturalHeight = panel.scrollHeight;
        gsap.set(panel, { height: 0 });

        const tl = gsap.timeline();
        tl.to(panel, { height: naturalHeight, duration, ease: EASE.secondary });
        tl.fromTo(
          content,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: duration * 0.7, ease: EASE.primary },
          duration * 0.3
        );
        if (chevron) {
          tl.to(chevron, { rotation: 180, duration: duration * 0.6, ease: EASE.secondary }, 0);
        }
        tl.set(panel, { height: 'auto' });

        // Stagger-reveal topics
        const topics = content.querySelectorAll(`.${styles.topicItem}`);
        if (topics.length > 0) {
          tl.fromTo(
            topics,
            { opacity: 0, x: -8 },
            { opacity: 1, x: 0, duration: 0.3, stagger: 0.04, ease: EASE.primary },
            duration * 0.5
          );
        }
      } else {
        const currentHeight = panel.scrollHeight;
        gsap.set(panel, { height: currentHeight, overflow: 'hidden' });

        const tl = gsap.timeline();
        tl.to(content, { opacity: 0, y: -4, duration: duration * 0.4, ease: EASE.secondary });
        tl.to(panel, { height: 0, duration: duration * 0.6, ease: EASE.secondary }, duration * 0.2);
        if (chevron) {
          tl.to(chevron, { rotation: 0, duration: duration * 0.6, ease: EASE.secondary }, 0);
        }
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <div className={cn(styles.moduleCard, isOpen && styles.moduleCardOpen)}>
      <button
        type="button"
        className={styles.moduleHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className={styles.headerLeft}>
          <span className={styles.moduleNumber}>{formattedPhase}.</span>
          <span className={styles.moduleTitle}>{mod.title}</span>
          <Info size={14} className={styles.infoIcon} />
        </div>
        <div className={styles.headerRight}>
          <span className={styles.topicsCount}>{mod.topics.length} Topics</span>
          <div ref={chevronRef} className={styles.chevronWrap}>
            <ChevronDown size={16} />
          </div>
        </div>
      </button>

      <div
        ref={panelRef}
        style={{ height: 0, overflow: 'hidden' }}
      >
        <div ref={contentRef} className={styles.topicsContainer} style={{ opacity: 0 }}>
          <ul className={styles.topicsList}>
            {mod.topics.map((topic, tIdx) => (
              <li key={tIdx} className={styles.topicItem}>
                <div className={styles.topicLeft}>
                  <div className={styles.topicIconWrap}>
                    {tIdx % 2 === 0 ? (
                      <Play size={12} className={styles.playIcon} />
                    ) : (
                      <FileText size={12} className={styles.fileIcon} />
                    )}
                  </div>
                  <span className={styles.topicName}>{topic}</span>
                </div>
                <div className={styles.topicMeta}>
                  <span className={styles.topicDuration}>Lesson {tIdx + 1}</span>
                  <CheckCircle size={13} className={styles.topicCheck} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CurriculumAccordion: React.FC<CurriculumAccordionProps> = ({ modules }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleModule = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className={styles.accordionList}>
      {modules.map((mod, idx) => (
        <CurriculumModule
          key={idx}
          mod={mod}
          idx={idx}
          isOpen={openIndex === idx}
          onToggle={() => toggleModule(idx)}
        />
      ))}
    </div>
  );
};
