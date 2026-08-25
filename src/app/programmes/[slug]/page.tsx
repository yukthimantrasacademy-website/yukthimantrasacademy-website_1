import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Clock,
  GraduationCap,
  Laptop,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Layers,
  Wrench,
  Award,
  Briefcase,
  Users,
  Calendar,
  Maximize2,
  BookOpen,
  Check,
  FileCheck,
  Phone,
  MessageCircle,
  AlertCircle,
  Star,
} from 'lucide-react';
import {
  getProgrammeBySlug,
  getAllProgrammeSlugs,
  getRelatedProgrammes,
} from '@/services/programmes';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import { CTASection } from '@/components/shared/CTASection';
import { CurriculumAccordion } from '@/components/programmes/CurriculumAccordion';
import { ProgrammeCard } from '@/components/programmes/ProgrammeCard';
import { ProgrammeDetailAnimation } from '@/components/programmes/ProgrammeDetailAnimation';
import { buildProgrammeMetadata } from '@/seo/metadata';
import { JsonLd } from '@/seo/JsonLd';
import {
  getCourseSchema,
  getBreadcrumbSchema,
  getFAQSchema,
} from '@/seo/structured-data';
import { buildBreadcrumbs } from '@/seo/breadcrumbs';
import styles from './programmeDetail.module.css';
import { cn } from '@/lib/utils/cn';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const programmeImages: Record<string, string> = {
  'prog-01': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
  'prog-02': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  'prog-03': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  'prog-04': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
  'prog-05': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  'prog-06': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
  'prog-07': 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
  'prog-08': 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80',
  'prog-09': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
  'prog-10': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
  'prog-11': 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80',
};

export async function generateStaticParams() {
  const slugs = await getAllProgrammeSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const programme = await getProgrammeBySlug(slug);

  if (!programme) {
    return {
      title: 'Programme Not Found',
    };
  }

  return buildProgrammeMetadata(programme);
}

export default async function ProgrammeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const programme = await getProgrammeBySlug(slug);

  if (!programme) {
    notFound();
  }

  const relatedProgrammes = await getRelatedProgrammes(programme.slug, 2);

  const featuredImage =
    programmeImages[programme.id] ||
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80';

  // Structured Data Schemas
  const courseSchema = getCourseSchema(programme);
  const breadcrumbSchema = getBreadcrumbSchema(
    buildBreadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Programmes', path: '/programmes' },
      { name: programme.title, path: `/programmes/${programme.slug}` },
    ])
  );
  const faqSchema = programme.faqs ? getFAQSchema(programme.faqs) : null;

  return (
    <div className={styles.pageWrapper}>
      {/* Schema Injection */}
      <JsonLd data={[courseSchema, breadcrumbSchema, faqSchema].filter(Boolean) as any} />

      {/* Top Breadcrumb Navigation */}
      <div className={styles.breadcrumbArea}>
        <div className="container">
          <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
            <Link href="/" className={styles.crumbLink}>Home</Link>
            <ChevronRight size={14} className={styles.crumbDivider} />
            <Link href="/programmes" className={styles.crumbLink}>Programmes</Link>
            <ChevronRight size={14} className={styles.crumbDivider} />
            <span className={styles.currentCrumb}>{programme.title}</span>
          </nav>
        </div>
      </div>

      {/* Main 2-Column Content Layout */}
      <section className={styles.mainContentSection}>
        <div className="container">
          <ProgrammeDetailAnimation>
          <div className={styles.twoColLayout}>
            {/* =================================================================
                LEFT COLUMN: SHOWCASE BANNER, TABS, OVERVIEW, CURRICULUM, FAQS
                ================================================================= */}
            <div className={styles.leftColumn}>
              {/* Top Semantic Title Header */}
              <header className={styles.mainTitleHeader}>
                <span className={styles.mainCategoryPill}>{programme.category}</span>
                <h1 className={styles.mainTitle}>{programme.title}</h1>
              </header>

              {/* 1. Featured Media Showcase Banner */}
              <div className={styles.mediaShowcaseContainer}>
                <img
                  src={featuredImage}
                  alt={`${programme.title} banner`}
                  className={styles.showcaseImage}
                  data-programme-anim="showcase-img"
                  loading="eager"
                />
                <div className={styles.showcaseOverlayGradient} />

                {/* Top Controls Overlay */}
                <div className={styles.showcaseTopControls}>
                  <span className={styles.showcaseBadge}>{programme.category}</span>
                  <div className={styles.fullscreenIconWrap}>
                    <Maximize2 size={16} />
                  </div>
                </div>

                {/* Bottom Showcase Bar */}
                <div className={styles.showcaseBottomBar}>
                  <div className={styles.showcaseLiveStatus}>
                    <span className={styles.statusPulseDot} />
                    <span>Active Cohort Enrolments • 2026 Curriculum</span>
                  </div>
                  <span className={styles.showcaseTrackPill}>
                    {programme.duration} Practical Track
                  </span>
                </div>
              </div>

              {/* 2. Navigation Tabs */}
              <div className={styles.tabsNavBar}>
                <a href="#about" className={cn(styles.tabBtn, styles.tabBtnActive)}>
                  Course Info
                </a>
                <a href="#curriculum" className={styles.tabBtn}>
                  Curriculum ({programme.curriculum.length} Modules)
                </a>
                <a href="#outcomes" className={styles.tabBtn}>
                  Career Outcomes
                </a>
                <a href="#faq" className={styles.tabBtn}>
                  FAQs
                </a>
              </div>

              {/* 3. About Programme Section */}
              <div id="about" className={styles.contentBlock}>
                <h2 className={styles.blockHeading}>Programme Overview</h2>
                <div className={styles.textBody}>
                  <p className={styles.leadParagraph}>{programme.summary}</p>
                  <p className={styles.detailedParagraph}>{programme.description}</p>
                </div>
              </div>

              {/* 4. What Will I Learn? Section */}
              <div className={styles.contentBlock}>
                <h2 className={styles.blockHeading}>Curriculum Learning Areas</h2>
                <div className={styles.learningGrid} data-programme-anim="learning-grid">
                  {programme.learningAreas.map((area, idx) => (
                    <div key={idx} className={styles.learningItem}>
                      <div className={styles.learningCheckWrap}>
                        <Check size={12} className={styles.learningCheckIcon} strokeWidth={3} />
                      </div>
                      <span className={styles.learningText}>{area}</span>
                    </div>
                  ))}
                  {programme.careerOutcomes.slice(0, 4).map((outcome, idx) => (
                    <div key={`outcome-${idx}`} className={styles.learningItem}>
                      <div className={styles.learningCheckWrap}>
                        <Check size={12} className={styles.learningCheckIcon} strokeWidth={3} />
                      </div>
                      <span className={styles.learningText}>Target Role: {outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Interactive Curriculum Accordion */}
              <div id="curriculum" className={styles.contentBlock}>
                <div className={styles.curriculumHeader}>
                  <h2 className={styles.blockHeading}>Detailed Curriculum Modules</h2>
                  <span className={styles.curriculumMeta}>
                    {programme.curriculum.length} Structured Phases • Hands-on Labs Included
                  </span>
                </div>
                <CurriculumAccordion modules={programme.curriculum} />
              </div>

              {/* 6. Career Outcomes Block */}
              <div id="outcomes" className={styles.contentBlock}>
                <h2 className={styles.blockHeading}>Target Career Outcomes</h2>
                <p className={styles.subText}>
                  Graduates of this track are actively qualified for the following industry positions:
                </p>
                <div className={styles.careerChipsGrid} data-programme-anim="career-grid">
                  {programme.careerOutcomes.map((role, idx) => (
                    <div key={idx} className={styles.careerRoleCard}>
                      <Briefcase size={16} className={styles.careerIcon} />
                      <span className={styles.roleName}>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. Frequently Asked Questions */}
              {programme.faqs && programme.faqs.length > 0 && (
                <div id="faq" className={styles.contentBlock}>
                  <h2 className={styles.blockHeading}>Frequently Asked Questions</h2>
                  <FAQAccordion
                    items={programme.faqs.map((faq, idx) => ({
                      id: `prog-faq-${idx}`,
                      question: faq.question,
                      answer: faq.answer,
                    }))}
                  />
                </div>
              )}
            </div>

            {/* =================================================================
                RIGHT COLUMN: ACTION CARD, MENTORS, BATCH WIDGET, PREREQS, TAGS
                ================================================================= */}
            <div className={styles.rightColumn}>
              <aside className={styles.sidebarStack}>
                {/* 1. Primary Action / Enrolment Card */}
                <div className={styles.actionCard} data-programme-anim="action-card">
                  <div className={styles.actionCardHeader}>
                    <span className={styles.admissionsBadge}>● Admissions Open</span>
                    <span className={styles.cohortTag}>2026 Batch</span>
                  </div>

                  <h3 className={styles.actionCardTitle}>{programme.title}</h3>
                  <p className={styles.actionCardSub}>
                    Specialised {programme.category} track with 1-on-1 mentorship, live clinical dataset labs, and placement guidance.
                  </p>

                  <div className={styles.ctaButtonGroup}>
                    <Link
                      href={`/admission-counselling?programme=${programme.slug}`}
                      className={styles.primaryApplyBtn}
                    >
                      <span>Apply for Admission</span>
                      <ArrowRight size={15} />
                    </Link>

                    <Link
                      href="/contact"
                      className={styles.secondaryCounsellingBtn}
                    >
                      Book Free Counselling
                    </Link>
                  </div>

                  <p className={styles.guaranteeText}>
                    <ShieldCheck size={14} className={styles.shieldIcon} />
                    <span>AAPC / AHIMA Aligned • Placement Assistance Included</span>
                  </p>

                  <div className={styles.specsDivider} />

                  {/* Programme Specs List with Icons */}
                  <ul className={styles.specsList}>
                    <li className={styles.specItem}>
                      <div className={styles.specLeft}>
                        <Award size={15} className={styles.specIcon} />
                        <span>Level</span>
                      </div>
                      <span className={styles.specVal}>Graduate &amp; Professional</span>
                    </li>

                    <li className={styles.specItem}>
                      <div className={styles.specLeft}>
                        <Users size={15} className={styles.specIcon} />
                        <span>Learners Enrolled</span>
                      </div>
                      <span className={styles.specVal}>500+ Active Alumni</span>
                    </li>

                    <li className={styles.specItem}>
                      <div className={styles.specLeft}>
                        <Clock size={15} className={styles.specIcon} />
                        <span>Duration</span>
                      </div>
                      <span className={styles.specVal}>{programme.duration}</span>
                    </li>

                    <li className={styles.specItem}>
                      <div className={styles.specLeft}>
                        <Laptop size={15} className={styles.specIcon} />
                        <span>Learning Mode</span>
                      </div>
                      <span className={styles.specVal}>
                        {programme.learningModes.join(' / ')}
                      </span>
                    </li>

                    <li className={styles.specItem}>
                      <div className={styles.specLeft}>
                        <Calendar size={15} className={styles.specIcon} />
                        <span>Curriculum Status</span>
                      </div>
                      <span className={styles.specVal}>Updated for 2026</span>
                    </li>

                    <li className={styles.specItem}>
                      <div className={styles.specLeft}>
                        <GraduationCap size={15} className={styles.specIcon} />
                        <span>Certificate</span>
                      </div>
                      <span className={styles.specVal}>Industry Verified</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Live Batch Schedule & Seat Status Widget */}
                <div className={styles.sidebarCard}>
                  <div className={styles.batchHeader}>
                    <span className={styles.cardSectionLabel}>Batch &amp; Schedule</span>
                    <span className={styles.seatsLeftBadge}>7 Seats Left</span>
                  </div>
                  <div className={styles.batchInfoList}>
                    <div className={styles.batchInfoRow}>
                      <Calendar size={14} className={styles.batchIcon} />
                      <div className={styles.batchTextGroup}>
                        <span className={styles.batchLabel}>Upcoming Cohort</span>
                        <span className={styles.batchValue}>Starts 15th of Next Month</span>
                      </div>
                    </div>
                    <div className={styles.batchInfoRow}>
                      <Clock size={14} className={styles.batchIcon} />
                      <div className={styles.batchTextGroup}>
                        <span className={styles.batchLabel}>Lecture Timing</span>
                        <span className={styles.batchValue}>Weekend &amp; Evening Live Slots</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.seatProgressWrap}>
                    <div className={styles.seatMeta}>
                      <span>Cohort Capacity</span>
                      <strong>18 / 25 Enrolled</strong>
                    </div>
                    <div className={styles.seatBarBg}>
                      <div className={styles.seatBarFill} style={{ width: '72%' }} />
                    </div>
                  </div>
                </div>

                {/* 3. Mentors Card */}
                <div className={styles.sidebarCard}>
                  <span className={styles.cardSectionLabel}>Curated By</span>
                  <div className={styles.mentorsList}>
                    <div className={styles.mentorItem}>
                      <div className={styles.mentorAvatar}>
                        <GraduationCap size={18} />
                      </div>
                      <div className={styles.mentorInfo}>
                        <span className={styles.mentorName}>YukthiMantra Academic Faculty</span>
                        <span className={styles.mentorRole}>Clinical Data &amp; AI Specialists</span>
                      </div>
                    </div>

                    <div className={styles.mentorItem}>
                      <div className={styles.mentorAvatar}>
                        <Award size={18} />
                      </div>
                      <div className={styles.mentorInfo}>
                        <span className={styles.mentorName}>Industry Advisory Board</span>
                        <span className={styles.mentorRole}>AAPC / AHIMA Certified Leaders</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Advantage */}
                <div className={styles.sidebarCard}>
                  <span className={styles.cardSectionLabel}>YukthiMantra Advantage</span>
                  <ul className={styles.advantageList}>
                    <li className={styles.advantageItem}>
                      <Sparkles size={14} className={styles.advIcon} />
                      <span>Domain-first clinical depth paired with modern tech</span>
                    </li>
                    <li className={styles.advantageItem}>
                      <Sparkles size={14} className={styles.advIcon} />
                      <span>1-on-1 resume review &amp; mock technical interviews</span>
                    </li>
                    <li className={styles.advantageItem}>
                      <Sparkles size={14} className={styles.advIcon} />
                      <span>Live EHR &amp; healthcare sandbox sandpits</span>
                    </li>
                    <li className={styles.advantageItem}>
                      <Sparkles size={14} className={styles.advIcon} />
                      <span>Direct hiring referrals across 30+ health-tech firms</span>
                    </li>
                  </ul>
                </div>

                {/* 5. Material Includes */}
                <div className={styles.sidebarCard}>
                  <span className={styles.cardSectionLabel}>Programme Includes</span>
                  <ul className={styles.bulletList}>
                    <li>Capstone Clinical Case Studies</li>
                    <li>Live Clinical Datasets &amp; EHR Simulation</li>
                    <li>1-on-1 Resume &amp; Mock Interview Prep</li>
                    <li>Dedicated Placement &amp; Referral Support</li>
                    <li>Lifetime Access to Learning Community</li>
                  </ul>
                </div>

                {/* 6. Requirements / Eligibility Criteria */}
                <div className={styles.sidebarCard}>
                  <span className={styles.cardSectionLabel}>Eligibility &amp; Prerequisites</span>
                  <ul className={styles.bulletList}>
                    {programme.eligibilityRequirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                {/* 7. Tools & Technologies */}
                <div className={styles.sidebarCard}>
                  <span className={styles.cardSectionLabel}>Tools &amp; Technologies</span>
                  <div className={styles.tagsCloud}>
                    {programme.toolsAndTechnologies.map((tool, idx) => (
                      <span key={idx} className={styles.tagPill}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 8. Target Audience */}
                <div className={styles.sidebarCard}>
                  <span className={styles.cardSectionLabel}>Target Audience</span>
                  <ul className={styles.bulletList}>
                    {programme.idealFor.map((aud, idx) => (
                      <li key={idx}>{aud}</li>
                    ))}
                  </ul>
                </div>

                {/* 9. Direct Academic Helpline Card */}
                <div className={styles.helplineCard}>
                  <div className={styles.helplineHeader}>
                    <AlertCircle size={18} className={styles.helpIcon} />
                    <span className={styles.helplineTitle}>Need 1-on-1 Advice?</span>
                  </div>
                  <p className={styles.helplineText}>
                    Our academic counsellors can help evaluate your degree eligibility and suggest the right track.
                  </p>
                  <Link href="/contact" className={styles.helplineBtn}>
                    <MessageCircle size={14} />
                    <span>Talk to an Advisor</span>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
          </ProgrammeDetailAnimation>
        </div>
      </section>

      {/* Related Programmes Section */}
      {relatedProgrammes.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container">
            <SectionHeading
              badge="Explore Related Tracks"
              title="Complementary Technology &amp; Healthcare Programmes"
              description="Discover interconnected pathways in clinical analytics, AI, and medical coding aligned with your career goals."
            />
            <div className={styles.relatedGrid}>
              {relatedProgrammes.map((rel, idx) => (
                <ProgrammeCard key={rel.id} programme={rel} index={idx + 1} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final Counselling CTA */}
      <CTASection
        title={`Ready to Enroll in ${programme.title}?`}
        subtitle="Speak with our educational advisors to confirm eligibility, batch schedules, and fee details."
        primaryCtaText="Apply for Admission"
        primaryCtaHref={`/admission-counselling?programme=${programme.slug}`}
        secondaryCtaText="Explore Other Programmes"
        secondaryCtaHref="/programmes"
      />
    </div>
  );
}
