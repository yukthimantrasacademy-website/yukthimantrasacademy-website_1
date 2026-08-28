import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  HeartPulse,
  LineChart,
  GraduationCap,
  Layers,
  FileCheck2,
  Users,
  Compass,
  CheckCircle,
  Stethoscope,
  Database,
  Brain,
  FileText,
  Star,
  ChevronDown,
  TrendingUp,
  Sparkles,
  Code,
  Clock,
  Lightbulb,
  BarChart3,
} from '@/components/icons/GoogleIcons';
import { Button } from '@/components/shared/Button';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProgrammesDirectory } from '@/components/programmes/ProgrammesDirectory';
import { CareerPathwaysBento } from '@/components/home/CareerPathwaysBento';
import { WhyChooseBento } from '@/components/home/WhyChooseBento';
import { ProgrammeCard } from '@/components/programmes/ProgrammeCard';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { HeroAnimation } from '@/components/home/HeroAnimation';
import { HeroFloatingCards } from '@/components/home/HeroFloatingCards';
import { PlayfulAboutHeadline } from '@/components/home/PlayfulAboutHeadline';
import { AboutBentoGrid } from '@/components/home/AboutBentoGrid';
import { LearnerActivityRibbon } from '@/components/home/LearnerActivityRibbon';
import { getFeaturedProgrammes, getProgrammesByGroup } from '@/services/programmes';
import { homeFAQs } from '@/data/faq';
import type { Metadata } from 'next';
import { buildPageMetadata, PAGE_SEO } from '@/seo/metadata';
import { JsonLd } from '@/seo/JsonLd';
import { getFAQSchema } from '@/seo/structured-data';
import styles from './home.module.css';
import { cn } from '@/lib/utils/cn';

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.home);

function getProgrammeIcon(slug: string) {
  switch (slug) {
    case 'healthcare-data-analytics-foundation':
      return <LineChart size={18} />;
    case 'certified-data-scientist-healthcare':
      return <Database size={18} />;
    case 'artificial-intelligence-healthcare':
      return <Brain size={18} />;
    case 'generative-ai-llm-healthcare':
      return <Sparkles size={18} />;
    case 'python-data-healthcare-automation':
      return <Code size={18} />;
    case 'machine-learning-mlops-foundation':
      return <Cpu size={18} />;
    case 'cpc-preparation-medical-coding':
      return <Stethoscope size={18} />;
    case 'ccs-preparation-clinical-coding':
      return <FileText size={18} />;
    case 'medical-billing-revenue-cycle-management':
      return <FileCheck2 size={18} />;
    case 'healthcare-it-clinical-data-management':
      return <Layers size={18} />;
    case 'medical-coding-data-analytics-integrated':
      return <Compass size={18} />;
    default:
      return <HeartPulse size={18} />;
  }
}

export default async function HomePage() {
  const featuredProgrammes = await getFeaturedProgrammes();
  const groupAProgrammes = await getProgrammesByGroup('Group A');
  const groupBProgrammes = await getProgrammesByGroup('Group B');

  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO SECTION — SKY BLUE WITH CLOUDS & 3 FLOATING CARDS */}
      <section className={styles.heroSection}>
        <HeroAnimation>
        <div className={styles.heroCanvas}>
          {/* Ambient Background Video */}
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.heroBgVideo}
            aria-hidden="true"
          >
            <source src="/hero-bg-video.mp4" type="video/mp4" />
            <source src="/home%20page%20hero%20sec%20bg%20video.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroVideoOverlay} /> */}

          {/* Subtle Cloud Background Layers */}
          <div className={styles.cloudLayer1} data-hero="cloud" />
          <div className={styles.cloudLayer2} data-hero="cloud" />
          <div className={styles.cloudLayer3} data-hero="cloud" />

          <div className={styles.heroContent}>
            {/* Top Star Pill Badge */}
            <div className={styles.badgeWrapper} data-hero="badge">
              <div className={cn(styles.frostedBadge, 'gsap-hero-hidden')}>
                <Star size={13} className={styles.starIcon} fill={true} />
                <span>INTEGRATED TECHNOLOGY + HEALTHCARE PROGRAMMES</span>
              </div>
            </div>

            {/* Editorial Headline with Italic Emphasis */}
            <h1 className={cn(styles.heroTitle, 'gsap-hero-hidden')} data-hero="heading">
              Build and <span className={styles.italicHighlight}>Elevate</span> Your Health-Tech Career
            </h1>

            {/* Subtitle */}
            <p className={cn(styles.heroSubtitle, 'gsap-hero-hidden')} data-hero="subtitle">
              Bridge modern technology, artificial intelligence, and specialized healthcare operations<br className={styles.desktopBr} />
              with 11 industry-aligned programmes, tailored specifically for graduates and pursuing students.
            </p>

            {/* Dual Pill CTA Buttons */}
            <div className={styles.heroActions} data-hero="cta">
              <Link href="/admission-counselling" className={cn(styles.darkCtaButton, 'gsap-hero-hidden')}>
                Book Free Counselling
              </Link>
              <Link href="/programmes" className={cn(styles.whiteCtaButton, 'gsap-hero-hidden')}>
                Explore Programmes
              </Link>
            </div>

            {/* 3 Interactive Floating Cards at Bottom of Hero */}
            <HeroFloatingCards />
          </div>
        </div>
        </HeroAnimation>
      </section>

      {/* 2. ABOUT ACADEMY SECTION (BENTO GRID MATCHING REFERENCE) */}
      <AnimatedSection as="section" className={cn('section-padding', styles.aboutSection)}>
        <div className="container">
          {/* Header Area */}
          <div className={styles.aboutHeaderArea}>
            <div className={styles.aboutEyebrow}>
              <span className={styles.eyebrowDot}>•</span> ABOUT US
            </div>
            <PlayfulAboutHeadline />
          </div>

          {/* Interactive Bento Grid with 50% ScrollTrigger Counter */}
          <AboutBentoGrid />
        </div>
      </AnimatedSection>

      {/* 3. PROGRAMMES OVERVIEW SECTION (DYNAMIC HOVER PREVIEW) */}
      <AnimatedSection as="section" className={cn('section-padding', styles.programmesSection)}>
        <div className="container">
          <SectionHeading
            badge="Programmes Directory"
            title="Technology + Healthcare Programmes"
            description="Explore our 11 industry-oriented programmes across data science, AI, medical coding, and healthcare operations."
          />

          <ProgrammesDirectory
            groupAProgrammes={groupAProgrammes}
            groupBProgrammes={groupBProgrammes}
          />
        </div>
      </AnimatedSection>

      {/* 3.5. LEARNER ACTIVITY & SOCIAL PROOF RIBBON (25% FROM BOTTOM TRIGGER) */}
      <LearnerActivityRibbon />

      {/* 4. CAREER PATHWAYS PREVIEW (BENTO GRID MATCHING REFERENCE) */}
      <AnimatedSection as="section" className={cn('section-padding', styles.pathwaysSection)}>
        <div className="container">
          <SectionHeading
            badge="Career Pathways"
            title="Navigate Your Healthcare Tech Journey"
            description="Understand your career direction before selecting a programme. We guide learners through four distinct tracks based on their academic background and goals."
          />

          <CareerPathwaysBento />
        </div>
      </AnimatedSection>

      {/* 5. WHY CHOOSE THE ACADEMY (IOS WIDGET BENTO GRID) */}
      <AnimatedSection as="section" className={cn('section-padding', styles.whySection)}>
        <div className="container">
          <SectionHeading
            badge="Why YukthiMantra"
            title="Designed for Graduate Success in Health-Tech"
            description="Our academic framework combines rigorous domain training with career-oriented practical preparation."
          />

          <WhyChooseBento />
        </div>
      </AnimatedSection>

      {/* 6. FAQ SECTION (id="faq") */}
      <AnimatedSection as="section" className={cn('section-padding', styles.faqSection)} id="faq">
        <JsonLd data={getFAQSchema(homeFAQs)} />
        <div className="container">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Common Questions About YukthiMantra's Academy"
            description="Find clarity regarding our admission eligibility criteria, programme structures, learning modes, and counselling process."
          />

          <FAQAccordion items={homeFAQs} defaultOpenIndex={0} />
        </div>
      </AnimatedSection>

      {/* 7. FINAL COUNSELLING CTA */}
      <CTASection
        title="Start Your Technology + Healthcare Career Assessment"
        subtitle="YukthiMantra’s Academy programmes are designed for candidates pursuing or having completed graduation. Schedule a free counselling call to verify eligibility and find your ideal programme pathway."
        primaryCtaText="Book Free Career Counselling"
        primaryCtaHref="/admission-counselling"
        secondaryCtaText="Check Your Eligibility"
        secondaryCtaHref="/eligibility"
      />
    </div>
  );
}
