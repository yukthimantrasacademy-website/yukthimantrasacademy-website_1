import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Compass,
  Brain,
  Database,
  Stethoscope,
  Layers,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Check,
  Timer,
  Calendar,
  Clock,
  Pin,
} from 'lucide-react';
import { CareerFloatingCards } from '@/components/career-pathways/CareerFloatingCards';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/shared/Button';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { PageHeroAnimation } from '@/components/shared/PageHeroAnimation';
import { getPathwayCategories } from '@/services/pathways';
import { getProgrammes } from '@/services/programmes';
import styles from './careerPathways.module.css';
import { cn } from '@/lib/utils/cn';

import { buildPageMetadata, PAGE_SEO } from '@/seo/metadata';
import { JsonLd } from '@/seo/JsonLd';
import { getBreadcrumbSchema } from '@/seo/structured-data';
import { buildBreadcrumbs } from '@/seo/breadcrumbs';

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.careerPathways);

export default async function CareerPathwaysPage() {
  const categories = await getPathwayCategories();
  const allProgrammes = await getProgrammes();

  const breadcrumbSchema = getBreadcrumbSchema(
    buildBreadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Career Pathways', path: '/career-pathways' },
    ])
  );

  const getCategoryTheme = (id: string) => {
    switch (id) {
      case 'tech-ai':
        return {
          icon: <Brain size={28} />,
          badge: 'High Growth AI',
          gradient: 'linear-gradient(135deg, #0584c6 0%, #0369a1 100%)',
          accentColor: '#0584c6',
          bgAccent: '#f0f9ff',
        };
      case 'healthcare-tech':
        return {
          icon: <Database size={28} />,
          badge: 'Clinical Data Systems',
          gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
          accentColor: '#0284c7',
          bgAccent: '#f0f9ff',
        };
      case 'medical-coding-ops':
        return {
          icon: <Stethoscope size={28} />,
          badge: 'AAPC / AHIMA Certified',
          gradient: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
          accentColor: '#0d9488',
          bgAccent: '#f0fdfa',
        };
      case 'integrated':
        return {
          icon: <Layers size={28} />,
          badge: 'Dual Specialisation',
          gradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
          accentColor: '#2563eb',
          bgAccent: '#eff6ff',
        };
      default:
        return {
          icon: <Compass size={28} />,
          badge: 'Career Track',
          gradient: 'linear-gradient(135deg, #0584c6 0%, #0369a1 100%)',
          accentColor: '#0584c6',
          bgAccent: '#f0f9ff',
        };
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <JsonLd data={breadcrumbSchema} />
      {/* =========================================================================
          HERO SECTION: CHRONOTASK STYLE WITH 3D EMBLEM & FLOATING WIDGETS
          ========================================================================= */}
      <section className={styles.chronoHero}>
        <div className={styles.dotGridOverlay} />

        <PageHeroAnimation variant="floating-widgets">
          {/* GSAP Staggered 1-by-1 Floating Cards with Progress Loading Animation & Number Counters */}
          <CareerFloatingCards />

          {/* CENTER CONTENT */}
          <div className={styles.heroCenterContent}>
            {/* Elevated 3D 4-Dot Cube Emblem */}
            <div className={styles.emblem3DCube} data-hero-inner="badge">
              <div className={styles.emblemDotsGrid}>
                <span className={styles.dotCyan} />
                <span className={styles.dotDark} />
                <span className={styles.dotDark} />
                <span className={styles.dotDark} />
              </div>
            </div>

            <h1 className={styles.chronoTitle} data-hero-inner="heading">
              Think, plan, and track<br />
              <span className={styles.titleGradientMuted}>all in one place</span>
            </h1>

            <p className={styles.chronoSubtitle} data-hero-inner="subtitle">
              Efficiently map your degree, master healthcare technology skills, and boost your career placement.
            </p>

            <div className={styles.heroCtaWrapper} data-hero-inner="cta">
              <Link href="/admission-counselling" className={styles.chronoCtaButton}>
                Get free counselling
              </Link>
            </div>
          </div>
        </PageHeroAnimation>
      </section>

      {/* =========================================================================
          CAREER PATHWAY CATEGORIES (3D REDESIGNED CARDS)
          ========================================================================= */}
      <AnimatedSection as="section" className={cn('section-padding', styles.pathwaysContent)}>
        <div className="container">
          <SectionHeading
            badge="Structured Pathways"
            title="Four Clear Trajectories for Graduate Success"
            description="Explore our dedicated tracks designed to bridge engineering, life science, and commerce degrees with specialised industry roles."
          />

          <div className={styles.categoriesStack}>
            {categories.map((category) => {
              const theme = getCategoryTheme(category.id);

              return (
                <div key={category.id} id={category.id} className={styles.category3DBlock}>
                  {/* Category Header with 3D Emblem */}
                  <div className={styles.categoryHeader}>
                    <div
                      className={styles.category3DEmblem}
                      style={{ background: theme.gradient }}
                    >
                      {theme.icon}
                    </div>
                    <div className={styles.categoryHeaderInfo}>
                      <div className={styles.categoryBadgeRow}>
                        <span className={styles.themeBadge}>{theme.badge}</span>
                        <span className={styles.categoryCount}>
                          {category.pathways.length} Sub-Tracks Available
                        </span>
                      </div>
                      <h2 className={styles.categoryTitle}>{category.title}</h2>
                      <p className={styles.categoryDescription}>
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Sub-Pathways 3D Cards Grid */}
                  <div className={styles.pathway3DGrid}>
                    {category.pathways.map((pathway, pIdx) => {
                      const relatedProgs = allProgrammes.filter((p) =>
                        pathway.relatedProgrammeSlugs.includes(p.slug)
                      );

                      return (
                        <div key={pathway.id} className={styles.pathway3DCard}>
                          {/* Top Modern Header Bar */}
                          <div className={styles.card3DTop}>
                            <div className={styles.indexTag}>
                              <span className={styles.indexDot} />
                              <span>Track 0{pIdx + 1}</span>
                            </div>
                            <span className={styles.targetDegreePill}>
                              Graduate Track
                            </span>
                          </div>

                          <div className={styles.cardMainInfo}>
                            <h3 className={styles.pathwayName}>{pathway.title}</h3>
                            <p className={styles.pathwayDesc}>{pathway.description}</p>
                          </div>

                          {/* Modern Target Roles Chips */}
                          <div className={styles.sectionBlock}>
                            <span className={styles.blockLabel}>High-Demand Roles</span>
                            <div className={styles.rolesChipsList}>
                              {pathway.roles.map((role, idx) => (
                                <span key={idx} className={styles.role3DChip}>
                                  <div className={styles.chipCheckWrap}>
                                    <CheckCircle2 size={11} className={styles.chipCheck} />
                                  </div>
                                  <span>{role}</span>
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Core Competency Stack Chips */}
                          <div className={styles.sectionBlock}>
                            <span className={styles.blockLabel}>Core Competencies</span>
                            <div className={styles.skillsPillList}>
                              {pathway.skills.map((skill, sIdx) => (
                                <span key={sIdx} className={styles.skill3DPill}>
                                  #{skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Connected Programmes Section */}
                          <div className={styles.connectedProgrammes}>
                            <span className={styles.blockLabel}>Recommended Programmes</span>
                            <div className={styles.programmesList}>
                              {relatedProgs.map((prog) => (
                                <Link
                                  key={prog.id}
                                  href={`/programmes/${prog.slug}`}
                                  className={styles.prog3DLink}
                                >
                                  <div className={styles.progLinkContent}>
                                    <div className={styles.progIconWrap}>
                                      <BookOpen size={13} />
                                    </div>
                                    <span className={styles.progTitleText}>{prog.title}</span>
                                  </div>
                                  <div className={styles.arrowCircle}>
                                    <ArrowUpRight size={13} />
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* =========================================================================
          DEGREE MATRIX GUIDANCE (3D WIDGET CARDS)
          ========================================================================= */}
      <AnimatedSection as="section" className={cn('section-padding', styles.guidanceSection)}>
        <div className="container">
          <SectionHeading
            badge="Degree Synergies"
            title="Which Pathway Aligns With Your Background?"
            description="Our academic advisors map your specific degree qualification to industry-aligned healthcare technology tracks."
          />

          <div className={styles.degreeMatrixGrid}>
            <div className={styles.degree3DCard}>
              <div className={styles.degreeCardHeader}>
                <div className={styles.degreeIconWrap}>
                  <Brain size={22} />
                </div>
                <span className={styles.degreeBadge}>Engineering &amp; IT</span>
              </div>
              <h4 className={styles.degreeTitle}>B.Tech • BCA • B.Sc Computer Science</h4>
              <p className={styles.degreeDesc}>
                Ideal for <strong>Technology + AI</strong> tracks: Data Science, Machine Learning pipelines, and Clinical GenAI automation.
              </p>
              <Button
                href="/programmes/certified-data-scientist-healthcare"
                variant="primary"
                size="sm"
                className={styles.matrixBtn}
              >
                Explore Data Science ↗
              </Button>
            </div>

            <div className={styles.degree3DCard}>
              <div className={styles.degreeCardHeader}>
                <div className={styles.degreeIconWrap}>
                  <Stethoscope size={22} />
                </div>
                <span className={styles.degreeBadge}>Life Sciences &amp; Pharma</span>
              </div>
              <h4 className={styles.degreeTitle}>B.Pharm • B.Sc Biology • Nursing • BDS</h4>
              <p className={styles.degreeDesc}>
                Ideal for <strong>Medical Coding (CPC/CCS)</strong>, <strong>Clinical Data Management</strong>, or the flagship <strong>Integrated Pathway</strong>.
              </p>
              <Button
                href="/programmes/cpc-preparation-medical-coding"
                variant="primary"
                size="sm"
                className={styles.matrixBtn}
              >
                Explore Medical Coding ↗
              </Button>
            </div>

            <div className={styles.degree3DCard}>
              <div className={styles.degreeCardHeader}>
                <div className={styles.degreeIconWrap}>
                  <Database size={22} />
                </div>
                <span className={styles.degreeBadge}>Commerce &amp; General</span>
              </div>
              <h4 className={styles.degreeTitle}>B.Com • BBA • BA • Allied Sciences</h4>
              <p className={styles.degreeDesc}>
                Ideal for <strong>Revenue Cycle Management (RCM)</strong>, <strong>Medical Billing</strong>, and foundational <strong>Healthcare Analytics</strong>.
              </p>
              <Button
                href="/programmes/medical-billing-revenue-cycle-management"
                variant="primary"
                size="sm"
                className={styles.matrixBtn}
              >
                Explore Medical Billing ↗
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FINAL COUNSELLING CTA */}
      <CTASection
        title="Need Personalised Pathway Guidance?"
        subtitle="Schedule a free 1-on-1 session with our academic advisors to discuss your educational background and career objectives."
        primaryCtaText="Book Free Career Counselling"
        primaryCtaHref="/admission-counselling"
        secondaryCtaText="Check Your Eligibility"
        secondaryCtaHref="/eligibility"
      />
    </div>
  );
}
