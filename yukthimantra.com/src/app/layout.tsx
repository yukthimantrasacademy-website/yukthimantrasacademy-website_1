import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/shared/ScrollProgressBar';
import { PageTransitionWrapper } from '@/components/shared/PageTransitionWrapper';
import { SmoothScrollProvider } from '@/components/shared/SmoothScrollProvider';
import { siteConfig } from '@/lib/config/site';

import { JsonLd } from '@/seo/JsonLd';
import { getOrganizationSchema, getWebSiteSchema } from '@/seo/structured-data';

export const viewport: Viewport = {
  themeColor: '#1676b0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Yukthimantra's Academy | Technology & Healthcare Career Programmes",
    template: "%s | Yukthimantra's Academy",
  },
  description: siteConfig.description,
  keywords: [
    "Yukthimantra's Academy",
    'Healthcare Data Analytics',
    'Medical Coding Training',
    'CPC Preparation',
    'CCS Preparation',
    'Artificial Intelligence in Healthcare',
    'Generative AI Healthcare',
    'Healthcare IT',
    'Clinical Data Management',
    'Revenue Cycle Management',
    'Graduate Career Programmes',
  ],
  authors: [{ name: "Yukthimantra's Academy" }],
  creator: "Yukthimantra's Academy",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: "Yukthimantra's Academy | Technology & Healthcare Career Programmes",
    description: siteConfig.description,
    siteName: "Yukthimantra's Academy",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Yukthimantra's Academy | Technology & Healthcare Career Programmes",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={[orgSchema, webSiteSchema]} />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <SmoothScrollProvider>
          <ScrollProgressBar />
          <Navbar />
          <main>
            <PageTransitionWrapper>
              {children}
            </PageTransitionWrapper>
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
