import React from 'react';
import type { Metadata } from 'next';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ProgrammesHeroAnimation } from '@/components/programmes/ProgrammesHeroAnimation';
import { ProgrammesCatalogue } from '@/components/programmes/ProgrammesCatalogue';
import { getProgrammes } from '@/services/programmes';
import { Info } from '@/components/icons/GoogleIcons';
import styles from './programmes.module.css';
import { cn } from '@/lib/utils/cn';

import { buildPageMetadata, PAGE_SEO } from '@/seo/metadata';
import { JsonLd } from '@/seo/JsonLd';
import { getBreadcrumbSchema } from '@/seo/structured-data';
import { buildBreadcrumbs } from '@/seo/breadcrumbs';

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.programmes);

export default async function ProgrammesPage() {
  const allProgrammes = await getProgrammes();
  const breadcrumbSchema = getBreadcrumbSchema(
    buildBreadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Programmes', path: '/programmes' },
    ])
  );

  return (
    <div className={styles.pageWrapper}>
      <JsonLd data={breadcrumbSchema} />
      {/* 1. GSAP ScrollTrigger Hero Section with Text Reveal & Number Counters */}
      <ProgrammesHeroAnimation />

      {/* Catalogue Section with Search, Pills & Image 3 Cards */}
      <AnimatedSection as="section" className={cn('section-padding', styles.contentSection)}>
        <div className="container">
          {/* Admissions note banner */}
          <div className={styles.feeNotice}>
            <Info size={18} className={styles.feeIcon} />
            <p>
              <strong>Admissions &amp; Batches:</strong> All programmes are designed for graduates and final-year students. Schedule a free counselling call for upcoming cohort dates and syllabus details.
            </p>
          </div>

          <ProgrammesCatalogue initialProgrammes={allProgrammes} />
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <CTASection
        title="Need Help Deciding the Right Programme?"
        subtitle="Our academic counsellors evaluate your academic background, technical aptitude, and career goals to recommend the ideal programme track."
        primaryCtaText="Book Free Career Counselling"
        primaryCtaHref="/admission-counselling"
      />
    </div>
  );
}
