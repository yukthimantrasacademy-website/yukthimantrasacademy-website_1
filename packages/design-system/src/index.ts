/**
 * YukthiMantra Academy - Shared Design System Tokens
 */

export const colors = {
  // Brand Primary & Secondary
  primary: '#1676b0',
  primaryDark: '#206090',
  accent: '#c0f050',
  secondary: '#8e8ffb',
  hero: '#78b8e8',
  lavender: '#e8e7ff',

  // Surfaces & Backgrounds
  background: '#ffffff',
  backgroundSoft: '#f5f7fa',
  backgroundBlue: '#dfecfa',
  backgroundLavender: '#f1f0ff',
  backgroundDark: '#0f172a',
  surfaceCard: '#ffffff',
  surfaceCardSubtle: '#f8fafc',

  // Text Colors
  textPrimary: '#101010',
  textSecondary: '#5c6670',
  textMuted: '#7b8490',
  textInverse: '#ffffff',
  textInverseMuted: '#94a3b8',

  // Borders
  border: 'rgba(16, 16, 16, 0.09)',
  borderLight: 'rgba(16, 16, 16, 0.04)',
  borderFocus: '#1676b0',
} as const;

export const typography = {
  fontDisplay: '"Libre Caslon Condensed", Georgia, serif',
  fontUi: '"SFNSDisplay-Semibold", "SFProDisplay-Semibold", "SFUIDisplay-Semibold", ".SFUIDisplay-Semibold", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
  fontBody: '"Roboto", Arial, sans-serif',
} as const;

export const spacing = {
  none: '0px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
} as const;

export const shadows = {
  xs: '0 2px 6px rgba(16, 16, 16, 0.04)',
  sm: '0 4px 14px rgba(16, 16, 16, 0.06)',
  md: '0 12px 32px rgba(16, 16, 16, 0.08)',
  lg: '0 24px 60px rgba(16, 16, 16, 0.1)',
  accent: '0 8px 24px rgba(192, 240, 80, 0.35)',
} as const;

export const radii = {
  xs: '6px',
  sm: '8px',
  md: '14px',
  lg: '20px',
  xl: '28px',
  pill: '9999px',
} as const;

export const animation = {
  transitionFast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  transitionNormal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  transitionSlow: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const siteConfig = {
  name: "YukthiMantra's Academy",
  parentBrand: 'YukthiMantra',
  domains: {
    main: process.env.NEXT_PUBLIC_MAIN_SITE_URL || 'https://yukthimantrasacademy.com',
    app: process.env.NEXT_PUBLIC_APP_SITE_URL || 'https://app.yukthimantrasacademy.com',
    events: process.env.NEXT_PUBLIC_EVENTS_SITE_URL || 'https://events.yukthimantrasacademy.com',
  },
};
