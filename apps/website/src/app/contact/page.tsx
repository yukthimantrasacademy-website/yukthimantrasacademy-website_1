import React from 'react';
import type { Metadata } from 'next';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Headphones,
  ShieldCheck,
  ArrowRight,
} from '@/components/icons/GoogleIcons';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { Button } from '@/components/shared/Button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { PageHeroAnimation } from '@/components/shared/PageHeroAnimation';
import { siteConfig } from '@/lib/config/site';
import styles from './contact.module.css';
import { cn } from '@/lib/utils/cn';

import { buildPageMetadata, PAGE_SEO } from '@/seo/metadata';
import { JsonLd } from '@/seo/JsonLd';
import { getBreadcrumbSchema, getContactPageSchema } from '@/seo/structured-data';
import { buildBreadcrumbs } from '@/seo/breadcrumbs';

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.contact);

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema(
    buildBreadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ])
  );
  const contactPageSchema = getContactPageSchema();

  return (
    <div className={styles.pageWrapper}>
      <JsonLd data={[breadcrumbSchema, contactPageSchema]} />
      {/* 1. HERO SECTION */}
      <section className={styles.pageHero}>
        <div className={styles.heroAura} />
        <div className="container">
          <PageHeroAnimation>
          <div className={styles.heroContent}>
            <span className="badge-pill badge-pill-accent" data-hero-inner="badge">
              <Headphones size={14} />
              We Are Here to Guide You
            </span>
            <h1 className={styles.pageTitle} data-hero-inner="heading">
              Talk to an Academic <span className={styles.titleHighlight}>Advisor</span>
            </h1>
            <p className={styles.pageSubtitle} data-hero-inner="subtitle">
              Have questions regarding admission eligibility, curriculum details, batch timings, or career pathways? Our academic counselling team is available to assist you.
            </p>
          </div>
          </PageHeroAnimation>
        </div>
      </section>

      {/* 3. Main Contact Grid */}
      <AnimatedSection as="section" className={cn('section-padding', styles.contactSection)}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left: Contact Information & Cards */}
            <div className={styles.infoCol}>
              <div className={styles.advisorCard}>
                <div className={styles.advisorHeader}>
                  <div className={styles.advisorAvatar}>YM</div>
                  <div>
                    <h3 className={styles.advisorName}>Academic Advisory Desk</h3>
                    <span className={styles.advisorRole}>Admissions &amp; Career Guidance</span>
                  </div>
                </div>
                <p className={styles.advisorBio}>
                  Our advisors assess your degree background, guide you through the 6-step admissions journey, and share authorised batch dates and fee terms.
                </p>
                <div className={styles.advisorBadges}>
                  <span className="badge-pill">Free Consultation</span>
                  <span className="badge-pill badge-pill-accent">Graduation Focused</span>
                </div>
              </div>

              {/* Direct Contact Methods */}
              <div className={styles.contactList}>
                <div className={styles.contactCard}>
                  <div className={styles.iconWrap}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4>Email Enquiries</h4>
                    <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                    <span className={styles.responseNotice}>Responses within 24 hours</span>
                  </div>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.iconWrap}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4>Phone Counselling</h4>
                    <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
                    <span className={styles.responseNotice}>{siteConfig.businessHours}</span>
                  </div>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.iconWrap}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4>Academy Location</h4>
                    <p>{siteConfig.contact.address}</p>
                    <span className={styles.responseNotice}>Telangana, India</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Callout Card */}
              <div className={styles.whatsappCard}>
                <div className={styles.waContent}>
                  <MessageSquare size={26} className={styles.waIcon} />
                  <div>
                    <h4>Quick Query via WhatsApp</h4>
                    <p>Chat directly with an academic coordinator for quick eligibility and batch questions.</p>
                  </div>
                </div>
                <Button
                  href="/admission-counselling"
                  variant="accent"
                  size="md"
                  fullWidth
                >
                  Book Counselling on WhatsApp
                </Button>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className={styles.formCol}>
              <ContactForm />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
