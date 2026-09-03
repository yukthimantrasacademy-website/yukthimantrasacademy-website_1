import React from 'react';
import type { Metadata } from 'next';
import {
  UserCheck,
  Headphones,
  FileSearch,
  Award,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from '@/components/icons/GoogleIcons';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CounsellingForm } from '@/components/forms/CounsellingForm';
import { AdmissionProcessFlow } from '@/components/admission/AdmissionProcessFlow';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { PageHeroAnimation } from '@/components/shared/PageHeroAnimation';
import styles from './admissionCounselling.module.css';
import { cn } from '@/lib/utils/cn';

import { buildPageMetadata, PAGE_SEO } from '@/seo/metadata';
import { JsonLd } from '@/seo/JsonLd';
import { getBreadcrumbSchema, getFAQSchema } from '@/seo/structured-data';
import { buildBreadcrumbs } from '@/seo/breadcrumbs';

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.admissionCounselling);

const counsellingFAQs = [
  {
    id: 'cfaq-1',
    question: 'Is the career counselling session free of cost?',
    answer:
      'Yes. Our academic counselling and eligibility assessment is completely free. It is designed to ensure you choose the right programme matching your academic degree and career goals.',
  },
  {
    id: 'cfaq-2',
    question: 'How soon will a counsellor contact me after submitting the form?',
    answer:
      'Our academic advisory team typically reviews your details and contacts you via phone or WhatsApp within 24–48 working hours.',
  },
  {
    id: 'cfaq-3',
    question: 'Can I apply if I am in my final year of graduation?',
    answer:
      'Yes. Students currently pursuing their bachelor\'s degree (especially 2nd year onward or final-year) are eligible for admission counselling.',
  },
  {
    id: 'cfaq-4',
    question: 'What happens during the counselling call?',
    answer:
      'The counsellor will verify your graduation details, evaluate your computer aptitude and career interest, explain the curriculum of suitable programmes, and provide batch schedules and fee structures.',
  },
  {
    id: 'cfaq-5',
    question: 'Are online counselling calls available for outstation candidates?',
    answer:
      'Yes. We conduct counselling sessions via phone call, Google Meet, and WhatsApp for candidates across all locations.',
  },
];

export default function AdmissionCounsellingPage() {
  const breadcrumbSchema = getBreadcrumbSchema(
    buildBreadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Admission Counselling', path: '/admission-counselling' },
    ])
  );
  const faqSchema = getFAQSchema(counsellingFAQs);

  return (
    <div className={styles.pageWrapper}>
      <JsonLd data={[breadcrumbSchema, faqSchema].filter(Boolean) as any} />
      {/* 1. HERO SECTION */}
      <section className={styles.pageHero}>
        <div className={styles.heroAura} />
        <div className="container">
          <PageHeroAnimation>
          <div className={styles.heroContent}>
            <span className="badge-pill badge-pill-accent" data-hero-inner="badge">
              <Headphones size={14} />
              1-on-1 Academic Advisory
            </span>
            <h1 className={styles.pageTitle} data-hero-inner="heading">
              Admission &amp; Career <span className={styles.titleHighlight}>Counselling</span>
            </h1>
            <p className={styles.pageSubtitle} data-hero-inner="subtitle">
              YukthiMantra’s Academy programmes are designed only for candidates pursuing graduation or who have completed graduation. Based on your degree, year, and career goal, we guide you to the right pathway.
            </p>
          </div>
          </PageHeroAnimation>
        </div>
      </section>

      {/* 2. ADMISSION PROCESS SECTION (DYNAMIC SCROLL-REVEAL ROADMAP) */}
      <section className={cn('section-padding', styles.processJourneySection)}>
        <div className="container">
          <SectionHeading
            badge="Step-by-Step Journey"
            title="How the Admission Evaluation Works"
            description="A transparent 4-stage progression from your initial inquiry to confirmed class orientation and LMS onboarding."
          />

          <AdmissionProcessFlow />
        </div>
      </section>

      {/* 3. COUNSELLING APPLICATION FORM */}
      <AnimatedSection as="section" className={cn('section-padding', styles.formSection)}>
        <div className="container">
          <CounsellingForm />
        </div>
      </AnimatedSection>

      {/* 4. WHY CAREER COUNSELLING IS MANDATORY */}
      <AnimatedSection as="section" className={cn('section-padding', styles.whyCounsellingSection)}>
        <div className="container">
          <SectionHeading
            badge="Personalised Evaluation"
            title="Why Career Counselling is Mandatory"
            description="We believe in guided qualification rather than direct open enrollment to ensure every learner joins a programme suited to their capabilities."
          />

          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIconWrap}>
                <ShieldCheck size={24} />
              </div>
              <h4>Eligibility Confirmation</h4>
              <p>Ensuring compliance with graduation-level entry requirements across all technical and clinical tracks.</p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIconWrap}>
                <FileSearch size={24} />
              </div>
              <h4>Aptitude &amp; Background Alignment</h4>
              <p>Assessing mathematics, coding comfort, or medical terminology foundation before recommending tracks.</p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIconWrap}>
                <Clock size={24} />
              </div>
              <h4>Schedule &amp; Batch Matching</h4>
              <p>Matching your time availability with weekday, evening, weekend, or interactive online cohorts.</p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIconWrap}>
                <Award size={24} />
              </div>
              <h4>Transparent Fee &amp; Batch Info</h4>
              <p>Direct communication of authorized batch dates, scholarship qualifications, and installment options.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <AnimatedSection as="section" className={cn('section-padding', styles.faqSection)}>
        <div className="container">
          <SectionHeading
            badge="Counselling FAQ"
            title="Frequently Asked Questions About Counselling"
            description="Everything you need to know about our admission guidance process."
          />

          <FAQAccordion items={counsellingFAQs} defaultOpenIndex={0} />
        </div>
      </AnimatedSection>

      {/* 6. CTA SECTION */}
      <CTASection
        title="Ready to Begin Your Admission Evaluation?"
        subtitle="Submit the counselling form above or contact our academic advisory team to schedule your appointment."
        primaryCtaText="Check Eligibility Policy"
        primaryCtaHref="/eligibility"
        secondaryCtaText="Explore Programmes"
        secondaryCtaHref="/programmes"
      />
    </div>
  );
}
