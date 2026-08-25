import { siteConfig } from '@/lib/config/site';
import { getCanonicalUrl, getSiteUrl } from './canonical';
import type { Programme } from '@/types/programme';

/**
 * Organization Schema for Yukthimantra's Academy.
 */
export function getOrganizationSchema() {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${siteUrl}/#organization`,
    name: "Yukthimantra's Academy",
    alternateName: 'YukthiMantra Academy',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      'A specialised career-focused academy operating at the intersection of technology and healthcare education, preparing graduates for high-growth modern industry roles.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Admissions and Academic Advisory',
      email: siteConfig.contact.email,
      availableLanguage: ['English', 'Hindi', 'Telugu'],
    },
  };
}

/**
 * WebSite Schema with internal search action definition.
 */
export function getWebSiteSchema() {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: "Yukthimantra's Academy",
    description: siteConfig.description,
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    inLanguage: 'en-IN',
  };
}

/**
 * BreadcrumbList Schema matching visible on-page breadcrumb navigation.
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Course Schema for Programme Detail pages.
 * Fully compliant with Google Educational Schema guidelines without fake prices or fake ratings.
 */
export function getCourseSchema(programme: Programme) {
  const siteUrl = getSiteUrl();
  const programmeUrl = getCanonicalUrl(`/programmes/${programme.slug}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${programmeUrl}/#course`,
    name: programme.title,
    description: programme.summary || programme.description,
    url: programmeUrl,
    provider: {
      '@type': 'EducationalOrganization',
      name: "Yukthimantra's Academy",
      sameAs: siteUrl,
    },
    educationalLevel: 'Graduate & Professional',
    timeRequired: programme.duration,
    courseMode: programme.learningModes || ['Online Live Lectures', 'Weekend Cohort'],
    occupationalCredentialAwarded: 'Certificate of Professional Completion',
    programPrerequisites: programme.eligibilityRequirements,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Blended',
      courseWorkload: `${programme.duration} intensive practical track`,
    },
    about: [
      programme.category,
      programme.careerPathway,
      ...programme.learningAreas,
      ...programme.toolsAndTechnologies,
    ],
    audience: {
      '@type': 'Audience',
      audienceType: programme.idealFor.join(', '),
    },
    educationalProgramMode: 'cohort-based',
  };
}

/**
 * FAQPage Schema for pages with genuine on-page FAQ accordions.
 */
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * ContactPage Schema for /contact.
 */
export function getContactPageSchema() {
  const siteUrl = getSiteUrl();
  const contactUrl = getCanonicalUrl('/contact');

  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${contactUrl}/#webpage`,
    url: contactUrl,
    name: "Contact Yukthimantra's Academy",
    description:
      "Connect with Yukthimantra's Academy academic advisors for programme admissions, eligibility evaluation, and batch schedules.",
    mainEntity: {
      '@id': `${siteUrl}/#organization`,
    },
  };
}
