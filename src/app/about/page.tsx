import React from 'react';
import type { Metadata } from 'next';
import {
  Sparkles,
  Target,
  Compass,
  HeartPulse,
  Cpu,
  GraduationCap,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/shared/Button';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { PageHeroAnimation } from '@/components/shared/PageHeroAnimation';
import styles from './about.module.css';
import { cn } from '@/lib/utils/cn';

import { buildPageMetadata, PAGE_SEO } from '@/seo/metadata';
import { JsonLd } from '@/seo/JsonLd';
import { getBreadcrumbSchema } from '@/seo/structured-data';
import { buildBreadcrumbs } from '@/seo/breadcrumbs';

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.about);

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema(
    buildBreadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ])
  );

  return (
    <div className={styles.pageWrapper}>
      <JsonLd data={breadcrumbSchema} />
      {/* 1. HERO SECTION */}
      <section className={styles.pageHero}>
        <div className={styles.heroAura} />
        <div className="container">
          <PageHeroAnimation>
          <div className={styles.heroContent}>
            <span className="badge-pill badge-pill-lavender" data-hero-inner="badge">
              <Sparkles size={14} />
              Educational Philosophy &amp; Vision
            </span>
            <h1 className={styles.pageTitle} data-hero-inner="heading">
              About YukthiMantra&apos;s <span className={styles.titleHighlight}>Academy</span>
            </h1>
            <p className={styles.pageSubtitle} data-hero-inner="subtitle">
              A dedicated career-focused academy operating at the intersection of technology and healthcare, preparing graduates for high-growth modern roles.
            </p>
          </div>
          </PageHeroAnimation>
        </div>
      </section>

      {/* 3. Academy Overview */}
      <AnimatedSection as="section" className={cn('section-padding', styles.overviewSection)}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              <span className="badge-pill badge-pill-accent">Brand &amp; Positioning</span>
              <h2 className={cn('text-editorial', styles.overviewHeading)}>
                Bridging Technology &amp; Healthcare Operations
              </h2>
              <p className={styles.paragraph}>
                YukthiMantra’s Academy is a specialised educational sub-brand of YukthiMantra. While YukthiMantra Services delivers technology solutions, the Academy is exclusively focused on graduate-level career education.
              </p>
              <p className={styles.paragraph}>
                Traditional education often treats technology and healthcare as entirely separate domains. We recognise that the most resilient career opportunities exist at their convergence — from healthcare data analytics and clinical machine learning to medical coding and digital revenue cycle management.
              </p>
            </div>

            <div className={styles.statsCard}>
              <div className={styles.statsHeader}>
                <ShieldCheck size={28} className={styles.statsShield} />
                <h3>Academy Principles</h3>
              </div>
              <ul className={styles.principlesList}>
                <li>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span><strong>Graduation Requirement:</strong> Exclusively for degree holders and pursuing students.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span><strong>Domain Integration:</strong> Real healthcare datasets paired with standard technology stacks.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span><strong>Guided Admissions:</strong> Personalised counselling assessment before enrolment.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span><strong>Ethical Governance:</strong> Transparent communication without unsupported placement claims.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Mission & Vision */}
      <AnimatedSection as="section" className={cn('section-padding', styles.missionVisionSection)}>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvIconWrap}>
                <Target size={28} />
              </div>
              <h3 className={styles.mvTitle}>Our Mission</h3>
              <p className={styles.mvText}>
                To empower graduates with targeted, industry-aligned competencies at the intersection of technology and healthcare through rigorous curriculum, hands-on clinical datasets, and dedicated academic mentorship.
              </p>
            </div>

            <div className={styles.mvCard}>
              <div className={styles.mvIconWrap}>
                <Compass size={28} />
              </div>
              <h3 className={styles.mvTitle}>Our Vision</h3>
              <p className={styles.mvText}>
                To be the benchmark academy for multidisciplinary health-tech career education, producing proficient analysts, AI associates, and clinical coding specialists who drive modern healthcare operations forward.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 5. Learning Philosophy */}
      <AnimatedSection as="section" className={cn('section-padding', styles.philosophySection)}>
        <div className="container">
          <SectionHeading
            badge="Learning Framework"
            title="Our Four-Pillar Learning Philosophy"
            description="How we design and deliver programmes to ensure practical competence and real career readiness."
          />

          <div className={styles.philosophyGrid}>
            <div className={styles.philCard}>
              <span className={styles.philNumber}>01</span>
              <h4>Foundation-First Pedagogy</h4>
              <p>Ensuring rock-solid basics in coding, statistics, and medical terminology before progressing to advanced models or inpatient coding systems.</p>
            </div>

            <div className={styles.philCard}>
              <span className={styles.philNumber}>02</span>
              <h4>Real Healthcare Datasets</h4>
              <p>Every analysis, dashboard, and case study utilizes realistic clinical workflows, EHR records, claims structures, and health-tech scenarios.</p>
            </div>

            <div className={styles.philCard}>
              <span className={styles.philNumber}>03</span>
              <h4>Certification Orientation</h4>
              <p>For credentials like CPC and CCS, our curriculum aligns with official exam guidelines, test strategies, and extensive mock reviews.</p>
            </div>

            <div className={styles.philCard}>
              <span className={styles.philNumber}>04</span>
              <h4>Comprehensive Support</h4>
              <p>Beyond classroom instruction, learners receive portfolio guidance, technical interview preparation, and employer readiness assistance.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 6. CTA */}
      <CTASection
        title="Explore Our Technology + Healthcare Pathways"
        subtitle="Discover our 11 programmes or speak with an academic counsellor to confirm your eligibility."
        primaryCtaText="Explore Programmes"
        primaryCtaHref="/programmes"
        secondaryCtaText="Check Your Eligibility"
        secondaryCtaHref="/eligibility"
      />
    </div>
  );
}
