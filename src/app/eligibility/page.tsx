import React from 'react';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  GraduationCap,
  Award,
  Briefcase,
  AlertTriangle,
  FileCheck2,
  CheckCircle,
  IdCard,
  FileText,
  ScrollText,
  FileUser,
  Phone,
  Mail,
  XCircle,
  Check,
} from '@/components/icons/GoogleIcons';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { PageHeroAnimation } from '@/components/shared/PageHeroAnimation';
import {
  preferredBackgrounds,
  whoShouldNotEnrol,
  requiredDocuments,
} from '@/data/eligibility';
import styles from './eligibility.module.css';
import { cn } from '@/lib/utils/cn';

import { buildPageMetadata, PAGE_SEO } from '@/seo/metadata';
import { JsonLd } from '@/seo/JsonLd';
import { getBreadcrumbSchema } from '@/seo/structured-data';
import { buildBreadcrumbs } from '@/seo/breadcrumbs';

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.eligibility);

export default function EligibilityPage() {
  const breadcrumbSchema = getBreadcrumbSchema(
    buildBreadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Eligibility', path: '/eligibility' },
    ])
  );
  const getDocIcon = (iconName: string) => {
    switch (iconName) {
      case 'IdCard':
        return <IdCard size={20} />;
      case 'FileText':
        return <FileText size={20} />;
      case 'ScrollText':
        return <ScrollText size={20} />;
      case 'FileUser':
        return <FileUser size={20} />;
      case 'Phone':
        return <Phone size={20} />;
      case 'Mail':
        return <Mail size={20} />;
      default:
        return <FileCheck2 size={20} />;
    }
  };

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
                <ShieldCheck size={14} />
                Official Admission Policy
              </span>
              <h1 className={styles.pageTitle} data-hero-inner="heading">
                Admission Eligibility <span className={styles.titleHighlight}>Criteria</span>
              </h1>
              <p className={styles.pageSubtitle} data-hero-inner="subtitle">
                YukthiMantra’s Academy programmes are designed exclusively for candidates who are currently pursuing graduation or have completed a recognised bachelor&apos;s degree.
              </p>
            </div>
          </PageHeroAnimation>
        </div>
      </section>

      {/* 2. MANDATORY STATEMENT NOTICE */}
      <section className={styles.statementSection}>
        <div className="container">
          <div className={styles.statementBox}>
            <div className={styles.statementIconWrap}>
              <ShieldCheck size={26} />
            </div>
            <div className={styles.statementText}>
              <span className={styles.statementTitle}>
                Mandatory Graduation-Level Eligibility Notice
              </span>
              <p className={styles.statementDesc}>
                &ldquo;Admission Eligibility: This programme is open only to candidates who are currently pursuing graduation or have completed graduation. Eligibility is confirmed during counselling.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO CAN APPLY */}
      <AnimatedSection as="section" className={cn('section-padding', styles.whoCanApplySection)}>
        <div className="container">
          <SectionHeading
            badge="Candidate Profiles"
            title="Who Can Apply to Our Programmes"
            description="Our admissions framework supports three primary learner profiles seeking career progression in technology and healthcare."
          />

          <div className={styles.whoGrid}>
            <div className={styles.whoCard}>
              <div className={styles.whoIconWrap}>
                <GraduationCap size={26} />
              </div>
              <h3 className={styles.whoTitle}>Graduation Pursuing</h3>
              <p className={styles.whoDesc}>
                Students currently enrolled in a recognised bachelor&apos;s degree programme, preferably from second year onward. Subject to programme-specific counselling and academic schedule assessment.
              </p>
              <div className={styles.whoBadge}>Second Year Onward Preferred</div>
            </div>

            <div className={styles.whoCard}>
              <div className={styles.whoIconWrap}>
                <Award size={26} />
              </div>
              <h3 className={styles.whoTitle}>Graduation Completed</h3>
              <p className={styles.whoDesc}>
                Candidates who have completed a bachelor&apos;s degree in any discipline seeking focused career skills, domain specialisation, or transition into health-tech and medical operations.
              </p>
              <div className={styles.whoBadge}>Any Discipline Accepted</div>
            </div>

            <div className={styles.whoCard}>
              <div className={styles.whoIconWrap}>
                <Briefcase size={26} />
              </div>
              <h3 className={styles.whoTitle}>Working Professionals</h3>
              <p className={styles.whoDesc}>
                Graduates with work experience looking for evening, weekend, or online cohort learning to upskill in analytics, AI applications, or clinical coding.
              </p>
              <div className={styles.whoBadge}>Flexible Batches Available</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 4. PREFERRED BACKGROUNDS */}
      <AnimatedSection as="section" className={cn('section-padding', styles.backgroundsSection)}>
        <div className="container">
          <SectionHeading
            badge="Academic Degrees"
            title="Preferred Degree Backgrounds"
            description="We welcome applicants from technology, science, commerce, pharmacy, and allied health disciplines."
          />

          <div className={styles.degreesGrid}>
            {preferredBackgrounds.map((deg, idx) => (
              <div key={idx} className={styles.degreeItem}>
                <div className={styles.degreeCheckWrap}>
                  <Check size={11} strokeWidth={3} className={styles.degreeCheck} />
                </div>
                <span>{deg}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 5. WHO SHOULD NOT ENROL */}
      <AnimatedSection as="section" className={cn('section-padding', styles.notEligibleSection)}>
        <div className="container">
          <div className={styles.notEligibleCard}>
            <div className={styles.notEligibleHeader}>
              <div className={styles.alertIconWrap}>
                <AlertTriangle size={22} />
              </div>
              <h3>Who Should Not Be Directly Enrolled</h3>
            </div>
            <p className={styles.notEligibleIntro}>
              In accordance with our governance and quality guidelines, the following applicants are not eligible for direct admission:
            </p>
            <ul className={styles.notEligibleList}>
              {whoShouldNotEnrol.map((reason, idx) => (
                <li key={idx}>
                  <XCircle size={17} className={styles.xIcon} />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* 6. REQUIRED DOCUMENTS */}
      <AnimatedSection as="section" className={cn('section-padding', styles.docsSection)}>
        <div className="container">
          <SectionHeading
            badge="Verification Checklist"
            title="Required Documents for Counselling &amp; Admission"
            description="Please keep the following documents accessible for eligibility confirmation during your counselling interaction."
          />

          <div className={styles.docsGrid}>
            {requiredDocuments.map((doc, idx) => (
              <div key={idx} className={styles.docCard}>
                <div className={styles.docIconWrap}>{getDocIcon(doc.icon)}</div>
                <h4 className={styles.docTitle}>{doc.document}</h4>
                <p className={styles.docDesc}>{doc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 7. CTA */}
      <CTASection
        title="Verify Your Eligibility With an Advisor"
        subtitle="Submit your graduation details to schedule a free counselling call. Our academic team will verify your eligibility and guide you to the right programme."
        primaryCtaText="Book Free Career Counselling"
        primaryCtaHref="/admission-counselling"
        secondaryCtaText="Explore Programmes Catalogue"
        secondaryCtaHref="/programmes"
      />
    </div>
  );
}
