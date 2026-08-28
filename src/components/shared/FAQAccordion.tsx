'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from '@/components/icons/GoogleIcons';
import { gsap, isClient, prefersReducedMotion } from '@/animations/gsap';
import styles from './FAQAccordion.module.css';
import { cn } from '@/lib/utils/cn';

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItemData[];
  defaultOpenIndex?: number;
  className?: string;
}

/** Single FAQ item with silky smooth GSAP expanding & collapsing animation */
const FAQItem: React.FC<{
  item: FAQItemData;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLSpanElement>(null);
  const isInitialMount = useRef(true);

  const headingId = `faq-heading-${item.id}`;
  const panelId = `faq-panel-${item.id}`;

  useEffect(() => {
    if (!isClient() || !panelRef.current || !contentRef.current) return;

    const panel = panelRef.current;
    const content = contentRef.current;
    const chevron = chevronRef.current;

    // Handle reduced motion preference
    if (prefersReducedMotion()) {
      panel.style.height = isOpen ? 'auto' : '0px';
      panel.style.overflow = 'hidden';
      content.style.opacity = isOpen ? '1' : '0';
      if (chevron) chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      return;
    }

    // On initial mount, set the state without running slow intro animations
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (isOpen) {
        gsap.set(panel, { height: 'auto', overflow: 'hidden' });
        gsap.set(content, { opacity: 1, y: 0 });
        if (chevron) gsap.set(chevron, { rotation: 180 });
      } else {
        gsap.set(panel, { height: 0, overflow: 'hidden' });
        gsap.set(content, { opacity: 0, y: 10 });
        if (chevron) gsap.set(chevron, { rotation: 0 });
      }
      return;
    }

    const openDuration = 0.52;
    const closeDuration = 0.42;

    const ctx = gsap.context(() => {
      if (isOpen) {
        // Measure natural height
        gsap.set(panel, { height: 'auto', overflow: 'hidden' });
        const naturalHeight = panel.scrollHeight;
        gsap.set(panel, { height: 0 });

        const tl = gsap.timeline();

        // 1. Smoothly expand panel height
        tl.to(panel, {
          height: naturalHeight,
          duration: openDuration,
          ease: 'power2.out',
        });

        // 2. Smoothly fade & glide answer content
        tl.fromTo(
          content,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: openDuration * 0.75,
            ease: 'power2.out',
          },
          0.1
        );

        // 3. Smoothly rotate chevron icon
        if (chevron) {
          tl.to(
            chevron,
            {
              rotation: 180,
              duration: openDuration * 0.85,
              ease: 'power2.out',
            },
            0
          );
        }

        // Set to auto for fluid window resizing
        tl.set(panel, { height: 'auto' });
      } else {
        const currentHeight = panel.scrollHeight;
        gsap.set(panel, { height: currentHeight, overflow: 'hidden' });

        const tl = gsap.timeline();

        // 1. Fade out content first
        tl.to(content, {
          opacity: 0,
          y: -4,
          duration: closeDuration * 0.4,
          ease: 'power2.in',
        });

        // 2. Smoothly collapse panel height
        tl.to(
          panel,
          {
            height: 0,
            duration: closeDuration,
            ease: 'power2.inOut',
          },
          0.05
        );

        // 3. Smoothly reverse rotate chevron
        if (chevron) {
          tl.to(
            chevron,
            {
              rotation: 0,
              duration: closeDuration * 0.85,
              ease: 'power2.out',
            },
            0
          );
        }
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <div
      className={cn(styles.accordionItem, isOpen && styles.itemOpen)}
    >
      <button
        id={headingId}
        type="button"
        className={styles.questionButton}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className={styles.questionText}>{item.question}</span>
        <span ref={chevronRef} className={styles.chevronWrapper}>
          <ChevronDown size={19} />
        </span>
      </button>

      <div
        id={panelId}
        ref={panelRef}
        role="region"
        aria-labelledby={headingId}
        className={styles.answerPanel}
        style={{ height: 0, overflow: 'hidden' }}
      >
        <div ref={contentRef} className={styles.answerContent} style={{ opacity: 0 }}>
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  defaultOpenIndex = 0,
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex >= 0 ? defaultOpenIndex : null
  );

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className={cn(styles.accordionWrapper, className)}>
      {items.map((item, idx) => (
        <FAQItem
          key={item.id}
          item={item}
          isOpen={openIndex === idx}
          onToggle={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
};
