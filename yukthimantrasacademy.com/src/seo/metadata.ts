import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config/site';
import { getCanonicalUrl, getSiteUrl } from './canonical';
import type { Programme } from '@/types/programme';

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[] | string[];
  ogType?: 'website' | 'article';
  image?: string;
  noIndex?: boolean;
}

const DEFAULT_KEYWORDS = [
  "Yukthimantra's Academy",
  'technology healthcare career programmes',
  'technology and healthcare career pathways',
  'graduate healthcare education',
  'health-tech career training',
];

const DEFAULT_OG_IMAGE = `${getSiteUrl()}/og-image.png`;

/**
 * Builds Next.js Metadata for static and dynamic pages with complete SEO + GEO fields.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = 'website',
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = getCanonicalUrl(path);
  const siteUrl = getSiteUrl();

  const mergedKeywords = Array.from(new Set([...keywords, ...DEFAULT_KEYWORDS]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Yukthimantra's Academy",
      locale: 'en_IN',
      type: ogType,
      images: [
        {
          url: image.startsWith('http') ? image : `${siteUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.startsWith('http') ? image : `${siteUrl}${image}`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Dynamic metadata generator for Programme Detail pages.
 */
export function buildProgrammeMetadata(programme: Programme): Metadata {
  const title = `${programme.title} | Yukthimantra's Academy`;
  const description =
    programme.seo?.metaDescription ||
    `${programme.title} for graduates and students pursuing graduation. Explore duration (${programme.duration}), learning areas, career outcomes and eligibility at Yukthimantra's Academy.`;

  const programmeKeywords = [
    programme.title,
    `${programme.title} course`,
    `${programme.category} programme`,
    programme.category,
    programme.careerPathway,
    ...programme.toolsAndTechnologies,
    ...programme.careerOutcomes,
    ...(programme.seo?.keywords || []),
  ];

  return buildPageMetadata({
    title,
    description,
    path: `/programmes/${programme.slug}`,
    keywords: programmeKeywords,
    ogType: 'article',
  });
}

/**
 * Standard page metadata configurations matching the official SEO + GEO Strategy.
 */
export const PAGE_SEO = {
  home: {
    title: "Yukthimantra's Academy | Technology & Healthcare Career Programmes",
    description:
      "Yukthimantra's Academy offers 11 integrated technology and healthcare career programmes for graduates and students pursuing graduation. Explore data science, AI, medical coding, and healthcare IT.",
    path: '/',
    keywords: [
      "Yukthimantra's Academy",
      'technology healthcare career programmes',
      'technology and healthcare career pathways',
      'healthcare data analytics course',
      'medical coding academy',
      'AI in healthcare training',
    ],
  },
  programmes: {
    title: "Career Programmes in Technology & Healthcare | Yukthimantra's Academy",
    description:
      "Explore 11 industry-aligned programmes across Data Science, AI, Medical Coding, and Healthcare Operations tailored for graduates and final-year students at Yukthimantra's Academy.",
    path: '/programmes',
    keywords: [
      'technology career programmes',
      'healthcare career programmes',
      'data science healthcare programmes',
      'AI healthcare programmes',
      'medical coding programmes',
    ],
  },
  careerPathways: {
    title: "Technology & Healthcare Career Pathways | Yukthimantra's Academy",
    description:
      'Navigate 4 distinct health-tech career pathways based on your academic degree. Discover roles in Healthcare Analytics, Clinical AI, Medical Coding, and Health Operations.',
    path: '/career-pathways',
    keywords: [
      'technology career pathways',
      'healthcare technology careers',
      'medical coding career path',
      'AI career path',
      'healthcare data career',
    ],
  },
  eligibility: {
    title: "Eligibility Requirements | Yukthimantra's Academy",
    description:
      "Check academic eligibility criteria for Yukthimantra's Academy programmes. Exclusively designed for candidates pursuing graduation or holding a recognised bachelor's degree.",
    path: '/eligibility',
    keywords: [
      'graduate eligibility',
      'graduation programme eligibility',
      'healthcare programme eligibility',
      'technology programme eligibility',
      'degree eligibility healthcare tech',
    ],
  },
  admissionCounselling: {
    title: "Admission Counselling | Yukthimantra's Academy",
    description:
      "Schedule a free 1-on-1 academic evaluation and career counselling call. Get degree verification, customised study roadmap, and cohort guidance at Yukthimantra's Academy.",
    path: '/admission-counselling',
    keywords: [
      'career counselling',
      'programme counselling',
      'technology career counselling',
      'healthcare career counselling',
      'admission evaluation',
    ],
  },
  about: {
    title: "About Yukthimantra's Academy | Technology + Healthcare Careers",
    description:
      "Learn about Yukthimantra's Academy, our educational philosophy, 4-pillar framework, and mission of bridging modern technology disciplines with healthcare operations for graduates.",
    path: '/about',
    keywords: [
      "Yukthimantra's Academy",
      'technology healthcare academy',
      'health-tech education',
      'graduate career academy',
    ],
  },
  careerSupport: {
    title: "Career Support | Yukthimantra's Academy",
    description:
      'Explore our comprehensive career readiness ecosystem — 1-on-1 mentorship, ATS resume polish, clinical capstone portfolios, and mock technical interview preparation.',
    path: '/career-support',
    keywords: [
      'career guidance',
      'career support',
      'interview preparation',
      'portfolio development',
      'health-tech placement assistance',
    ],
  },
  contact: {
    title: "Contact Yukthimantra's Academy",
    description:
      "Connect with Yukthimantra's Academy academic advisory team for programme admissions, eligibility evaluation, and upcoming cohort schedules via phone, email, or WhatsApp.",
    path: '/contact',
    keywords: [
      "Yukthimantra's Academy contact",
      'academic advisor',
      'career counselling contact',
      'admissions desk',
    ],
  },
} as const;
