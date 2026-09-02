import React from 'react';
import type { Metadata } from 'next';
import {
  Briefcase,
  FileCode2,
  MessagesSquare,
  Building2,
  ShieldCheck,
  Check,
  BookCheck,
  Sparkles,
  Compass,
  Code2,
  FileText,
  UserCheck,
} from '@/components/icons/GoogleIcons';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { PageHeroAnimation } from '@/components/shared/PageHeroAnimation';
import styles from './careerSupport.module.css';
import { cn } from '@/lib/utils/cn';

import { buildPageMetadata, PAGE_SEO } from '@/seo/metadata';
import { JsonLd } from '@/seo/JsonLd';
import { getBreadcrumbSchema } from '@/seo/structured-data';
import { buildBreadcrumbs } from '@/seo/breadcrumbs';

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.careerSupport);

export default function CareerSupportPage() {
  const breadcrumbSchema = getBreadcrumbSchema(
    buildBreadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Career Support', path: '/career-support' },
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
              <span className="badge-pill badge-pill-accent" data-hero-inner="badge">
                <Briefcase size={14} />
                Career Readiness Ecosystem
              </span>
              <h1 className={styles.pageTitle} data-hero-inner="heading">
                Career Support &amp; Placement <span className={styles.titleHighlight}>Readiness</span>
              </h1>
              <p className={styles.pageSubtitle} data-hero-inner="subtitle">
                We equip graduate learners with technical competency, authentic project portfolios, interview resilience, and employer readiness to accelerate transitions into health-tech and healthcare operations.
              </p>

              {/* Value Highlights Strip */}
              <div className={styles.statsStrip} data-hero-inner="tags">
                <span className={styles.statPill}>
                  <span className={styles.statDot} />
                  1-on-1 Career Mentorship
                </span>
                <span className={styles.statPill}>
                  <span className={styles.statDot} />
                  ATS Resume &amp; LinkedIn Polish
                </span>
                <span className={styles.statPill}>
                  <span className={styles.statDot} />
                  Healthcare Capstone Portfolios
                </span>
                <span className={styles.statPill}>
                  <span className={styles.statDot} />
                  Mock Technical Interviews
                </span>
              </div>
            </div>
          </PageHeroAnimation>
        </div>
      </section>

      {/* 2. FOUR PILLARS OF CAREER READINESS */}
      <AnimatedSection as="section" className={cn('section-padding', styles.pillarsSection)}>
        <div className="container">
          <SectionHeading
            badge="Support Framework"
            title="Four Pillars of Career Readiness"
            description="Comprehensive career transformation extending beyond classroom lectures to build demonstrable industry confidence."
          />

          <div className={styles.pillarsGrid}>
            {/* Pillar 1 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarCardHeader}>
                <div className={styles.pillarIconWrap}>
                  <Compass size={24} />
                </div>
                <span className={styles.pillarIndexTag}>01 / Strategy</span>
              </div>
              <h3 className={styles.pillarTitle}>Career Guidance &amp; Role Mapping</h3>
              <p className={styles.pillarDesc}>
                1-on-1 academic advisory sessions to align your bachelor&apos;s degree qualification, quantitative strengths, and interests with high-demand roles across healthcare data analytics, clinical coding, or IT automation.
              </p>
              <ul className={styles.pillarList}>
                <li className={styles.pillarListItem}>
                  <div className={styles.checkIconWrap}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Degree-to-role capability mapping</span>
                </li>
                <li className={styles.pillarListItem}>
                  <div className={styles.checkIconWrap}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Structured industry transition roadmap</span>
                </li>
                <li className={styles.pillarListItem}>
                  <div className={styles.checkIconWrap}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Continuous milestone &amp; assessment tracking</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarCardHeader}>
                <div className={styles.pillarIconWrap}>
                  <FileCode2 size={24} />
                </div>
                <span className={styles.pillarIndexTag}>02 / Evidence</span>
              </div>
              <h3 className={styles.pillarTitle}>Portfolio &amp; Capstone Development</h3>
              <p className={styles.pillarDesc}>
                Build practical, verifiable evidence of your capabilities through end-to-end healthcare capstone projects, real clinical case studies, Power BI dashboards, and public GitHub code repositories.
              </p>
              <ul className={styles.pillarList}>
                <li className={styles.pillarListItem}>
                  <div className={styles.checkIconWrap}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Clinical case study &amp; dataset writeups</span>
                </li>
                <li className={styles.pillarListItem}>
                  <div className={styles.checkIconWrap}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Interactive healthcare dashboard deployment</span>
                </li>
                <li className={styles.pillarListItem}>
                  <div className={styles.checkIconWrap}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Documented GitHub repository portfolio</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarCardHeader}>
                <div className={styles.pillarIconWrap}>
                  <MessagesSquare size={24} />
                </div>
                <span className={styles.pillarIndexTag}>03 / Simulation</span>
              </div>
              <h3 className={styles.pillarTitle}>Technical Interview Preparation</h3>
              <p className={styles.pillarDesc}>
                Master live coding evaluations, SQL problem-solving challenges, medical terminology rapid-fire drills, and scenario-based diagnostic assessments guided by senior industry mentors.
              </p>
              <ul className={styles.pillarList}>
                <li className={styles.pillarListItem}>
                  <div className={styles.checkIconWrap}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Simulated mock technical interview rounds</span>
                </li>
                <li className={styles.pillarListItem}>
                  <div className={styles.checkIconWrap}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Live coding &amp; SQL assessment simulations</span>
                </li>
                <li className={styles.pillarListItem}>
                  <div className={styles.checkIconWrap}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>CPC / CCS medical coding audit drills</span>
                </li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarCardHeader}>
                <div className={styles.pillarIconWrap}>
                  <Building2 size={24} />
                </div>
                <span className={styles.pillarIndexTag}>04 / Professional</span>
              </div>
              <h3 className={styles.pillarTitle}>Employer Readiness &amp; Grooming</h3>
              <p className={styles.pillarDesc}>
                ATS-compatible resume structuring, professional LinkedIn presence optimization, executive communication polish, and corporate workplace orientation for leading healthcare technology companies.
              </p>
              <ul className={styles.pillarList}>
                <li className={styles.pillarListItem}>
                  <div className={styles.checkIconWrap}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>ATS-optimized healthcare resume formatting</span>
                </li>
                <li className={styles.pillarListItem}>
                  <div className={styles.checkIconWrap}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>High-visibility LinkedIn profile optimization</span>
                </li>
                <li className={styles.pillarListItem}>
                  <div className={styles.checkIconWrap}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Corporate workplace communication training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. 4-STAGE CAREER READINESS ROADMAP */}
      <AnimatedSection as="section" className={cn('section-padding', styles.roadmapSection)}>
        <div className="container">
          <SectionHeading
            badge="Progression Roadmap"
            title="The 4-Stage Readiness Journey"
            description="How graduate learners transition from foundational learning to employer interviews."
          />

          <div className={styles.roadmapGrid}>
            <div className={styles.roadmapCard}>
              <span className={styles.roadmapPhaseBadge}>Stage 01</span>
              <h4 className={styles.roadmapTitle}>Baseline Assessment</h4>
              <p className={styles.roadmapDesc}>
                1-on-1 evaluation to identify core strengths, mathematics/coding baseline, and target career pathway.
              </p>
            </div>

            <div className={styles.roadmapCard}>
              <span className={styles.roadmapPhaseBadge}>Stage 02</span>
              <h4 className={styles.roadmapTitle}>Skill Acceleration</h4>
              <p className={styles.roadmapDesc}>
                Hands-on practical training covering industry toolchains, datasets, medical codes, and live lab projects.
              </p>
            </div>

            <div className={styles.roadmapCard}>
              <span className={styles.roadmapPhaseBadge}>Stage 03</span>
              <h4 className={styles.roadmapTitle}>Portfolio Showcase</h4>
              <p className={styles.roadmapDesc}>
                Deploying interactive dashboards and clinical case studies to demonstrate verifiable real-world competency.
              </p>
            </div>

            <div className={styles.roadmapCard}>
              <span className={styles.roadmapPhaseBadge}>Stage 04</span>
              <h4 className={styles.roadmapTitle}>Interview Placement</h4>
              <p className={styles.roadmapDesc}>
                Mock interviews, ATS resume distribution, and opportunity notifications with hiring healthcare partners.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 4. PLACEMENT ASSISTANCE GOVERNANCE & ETHICS */}
      <AnimatedSection as="section" className={cn('section-padding', styles.policySection)}>
        <div className="container">
          <div className={styles.policyCard}>
            <div className={styles.policyHeader}>
              <div className={styles.policyIconWrap}>
                <ShieldCheck size={26} />
              </div>
              <h3>Career Support Governance &amp; Ethics Policy</h3>
            </div>
            <p className={styles.policyText}>
              YukthiMantra’s Academy provides dedicated placement assistance and career guidance where operationally available. In strict adherence to our ethical admissions governance:
            </p>
            <div className={styles.policyItems}>
              <div className={styles.policyItem}>
                <div className={styles.policyCheckWrap}>
                  <Check size={11} strokeWidth={3} />
                </div>
                <span>We provide structured technical interview preparation, portfolio code reviews, and employer opportunity notifications.</span>
              </div>
              <div className={styles.policyItem}>
                <div className={styles.policyCheckWrap}>
                  <Check size={11} strokeWidth={3} />
                </div>
                <span>We do <strong>not</strong> make misleading or unsupported claims of guaranteed jobs, fixed starting salaries, or 100% placement.</span>
              </div>
              <div className={styles.policyItem}>
                <div className={styles.policyCheckWrap}>
                  <Check size={11} strokeWidth={3} />
                </div>
                <span>Career outcomes depend on candidate attendance, assessment performance, academic qualification, and employer requirements.</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 5. CTA */}
      <CTASection
        title="Discuss Your Career Transition With an Advisor"
        subtitle="Schedule a free counselling call to understand career pathways suited for your degree background."
        primaryCtaText="Book Free Career Counselling"
        primaryCtaHref="/admission-counselling"
        secondaryCtaText="Explore Programmes Catalogue"
        secondaryCtaHref="/programmes"
      />
    </div>
  );
}
