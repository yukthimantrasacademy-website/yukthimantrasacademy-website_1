/**
 * Site configuration — centralised environment-driven config.
 * Never hard-code domain URLs in components; use these values.
 */

export const siteConfig = {
  name: "YukthiMantra's Academy",
  brand: 'YukthiMantra',
  tagline: 'Technology + Healthcare Career Programmes',
  description:
    'Career-focused programmes at the intersection of technology and healthcare. For graduates and students pursuing graduation.',

  /** Current public website URL */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://domainname.com',

  /** Future platform URL */
  platformUrl: process.env.NEXT_PUBLIC_PLATFORM_URL || '',

  /** Future API base URL */
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '',

  /** Contact information — update with real data before launch */
  contact: {
    email: 'info@yukthimantrasacademy.com',
    phone: '+91 XXXXX XXXXX',
    whatsapp: '+91 XXXXX XXXXX',
    address: 'Hyderabad, Telangana, India',
  },

  /** Social links — update with real URLs before launch */
  social: {
    linkedin: '#',
    instagram: '#',
    youtube: '#',
  },

  /** Business hours */
  businessHours: 'Mon – Sat: 9:00 AM – 6:00 PM IST',
} as const;
