'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';

export type PersonVariant =
  | 'student'
  | 'advisor'
  | 'lead'
  | 'analyst'
  | 'coder'
  | 'auditor'
  | 'corporate'
  | 'faculty-1'
  | 'faculty-2'
  | 'faculty-3'
  | 'faculty-4'
  | 'mentor-william'
  | 'mentor-linda'
  | 'mentor-patricia';

export interface PersonPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: PersonVariant | string;
  name?: string;
  size?: number | string;
  className?: string;
  shape?: 'circle' | 'rounded' | 'square';
  badge?: string;
}

interface PaletteConfig {
  bgGradient: [string, string];
  skinTone: string;
  hairColor: string;
  clothesColor: string;
  accentColor: string;
  hairStyle: 'short' | 'curl' | 'tied' | 'bob' | 'advisor';
  hasGlasses?: boolean;
}

const PALETTES: Record<string, PaletteConfig> = {
  advisor: {
    bgGradient: ['#0f172a', '#1e293b'],
    skinTone: '#E5A67C',
    hairColor: '#1E293B',
    clothesColor: '#1676B0',
    accentColor: '#C0F050',
    hairStyle: 'advisor',
    hasGlasses: true,
  },
  student: {
    bgGradient: ['#0284c7', '#0369a1'],
    skinTone: '#F3C59F',
    hairColor: '#472B1E',
    clothesColor: '#8E8FFB',
    accentColor: '#C0F050',
    hairStyle: 'short',
  },
  lead: {
    bgGradient: ['#7c3aed', '#5b21b6'],
    skinTone: '#E8B38E',
    hairColor: '#1F1B24',
    clothesColor: '#C0F050',
    accentColor: '#38BDF8',
    hairStyle: 'bob',
    hasGlasses: true,
  },
  analyst: {
    bgGradient: ['#0284c7', '#0f766e'],
    skinTone: '#DF9B6D',
    hairColor: '#2B2118',
    clothesColor: '#F59E0B',
    accentColor: '#10B981',
    hairStyle: 'short',
    hasGlasses: true,
  },
  coder: {
    bgGradient: ['#4f46e5', '#312e81'],
    skinTone: '#ECC09B',
    hairColor: '#5C3A21',
    clothesColor: '#06B6D4',
    accentColor: '#A855F7',
    hairStyle: 'tied',
  },
  auditor: {
    bgGradient: ['#059669', '#064e3b'],
    skinTone: '#D49265',
    hairColor: '#1E293B',
    clothesColor: '#3B82F6',
    accentColor: '#FBBF24',
    hairStyle: 'short',
  },
  corporate: {
    bgGradient: ['#1e293b', '#0f172a'],
    skinTone: '#E2A980',
    hairColor: '#334155',
    clothesColor: '#0284C7',
    accentColor: '#C0F050',
    hairStyle: 'advisor',
  },
  'faculty-1': {
    bgGradient: ['#1e3a8a', '#1e1b4b'],
    skinTone: '#E7B68F',
    hairColor: '#2B262D',
    clothesColor: '#2563EB',
    accentColor: '#60A5FA',
    hairStyle: 'bob',
  },
  'faculty-2': {
    bgGradient: ['#065f46', '#022c22'],
    skinTone: '#DE986A',
    hairColor: '#18181B',
    clothesColor: '#059669',
    accentColor: '#34D399',
    hairStyle: 'short',
  },
  'faculty-3': {
    bgGradient: ['#701a75', '#4a044e'],
    skinTone: '#F2C19A',
    hairColor: '#4A2C1B',
    clothesColor: '#D946EF',
    accentColor: '#F472B6',
    hairStyle: 'tied',
    hasGlasses: true,
  },
  'faculty-4': {
    bgGradient: ['#831843', '#500724'],
    skinTone: '#D08C5E',
    hairColor: '#262626',
    clothesColor: '#E11D48',
    accentColor: '#FDA4AF',
    hairStyle: 'curl',
  },
  'mentor-william': {
    bgGradient: ['#1e293b', '#0f172a'],
    skinTone: '#E1A87D',
    hairColor: '#334155',
    clothesColor: '#0284C7',
    accentColor: '#38BDF8',
    hairStyle: 'short',
    hasGlasses: true,
  },
  'mentor-linda': {
    bgGradient: ['#312e81', '#1e1b4b'],
    skinTone: '#F3C59F',
    hairColor: '#5C3317',
    clothesColor: '#8B5CF6',
    accentColor: '#C084FC',
    hairStyle: 'bob',
  },
  'mentor-patricia': {
    bgGradient: ['#064e3b', '#022c22'],
    skinTone: '#EAB28A',
    hairColor: '#1C1917',
    clothesColor: '#10B981',
    accentColor: '#6EE7B7',
    hairStyle: 'tied',
    hasGlasses: true,
  },
};

export const PersonPlaceholder: React.FC<PersonPlaceholderProps> = ({
  variant = 'student',
  name,
  size = 48,
  shape = 'circle',
  className,
  style,
  badge,
  ...props
}) => {
  const sizeValue = typeof size === 'number' ? `${size}px` : size;
  const config = PALETTES[variant] || PALETTES['student'];

  const radiusStyle =
    shape === 'circle'
      ? '50%'
      : shape === 'rounded'
      ? '16px'
      : '0px';

  return (
    <div
      className={cn('inline-flex items-center justify-center relative overflow-hidden shrink-0 select-none', className)}
      style={{
        width: sizeValue,
        height: sizeValue,
        minWidth: sizeValue,
        minHeight: sizeValue,
        borderRadius: radiusStyle,
        background: `linear-gradient(135deg, ${config.bgGradient[0]} 0%, ${config.bgGradient[1]} 100%)`,
        boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0,0,0,0.12)',
        border: '1.5px solid rgba(255, 255, 255, 0.15)',
        ...style,
      }}
      title={name || variant}
      aria-label={name || `Person Character ${variant}`}
      {...props}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <defs>
          <linearGradient id={`grad-clothes-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={config.clothesColor} />
            <stop offset="100%" stopColor={config.bgGradient[0]} />
          </linearGradient>
          <linearGradient id={`grad-skin-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={config.skinTone} />
            <stop offset="100%" stopColor="#C97B49" />
          </linearGradient>
          <linearGradient id={`grad-glow-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={config.accentColor} stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ambient Top Glow */}
        <circle cx="50" cy="20" r="40" fill={`url(#grad-glow-${variant})`} />

        {/* Body / Shoulders */}
        <path
          d="M18 100 C18 72 32 64 50 64 C68 64 82 72 82 100 Z"
          fill={`url(#grad-clothes-${variant})`}
        />

        {/* Shirt Collar V-neck */}
        <path d="M42 64 L50 76 L58 64 Z" fill="#FFFFFF" opacity="0.9" />
        <path d="M45 64 L50 72 L55 64 Z" fill={config.accentColor} />

        {/* Neck */}
        <rect x="44" y="48" width="12" height="18" rx="4" fill={`url(#grad-skin-${variant})`} />

        {/* Head */}
        <ellipse cx="50" cy="40" rx="19" ry="21" fill={`url(#grad-skin-${variant})`} />

        {/* Hair Styles */}
        {config.hairStyle === 'advisor' && (
          <path
            d="M31 38 C30 22 40 16 50 16 C60 16 70 22 69 38 C67 27 61 22 50 22 C39 22 33 27 31 38 Z"
            fill={config.hairColor}
          />
        )}
        {config.hairStyle === 'short' && (
          <path
            d="M29 36 C29 20 40 15 50 15 C60 15 71 20 71 36 C66 23 58 20 50 20 C42 20 34 23 29 36 Z"
            fill={config.hairColor}
          />
        )}
        {config.hairStyle === 'bob' && (
          <g fill={config.hairColor}>
            <path d="M29 46 C27 24 38 16 50 16 C62 16 73 24 71 46 C68 28 62 21 50 21 C38 21 32 28 29 46 Z" />
            <path d="M28 35 Q26 52 33 55 Q35 40 34 32 Z" />
            <path d="M72 35 Q74 52 67 55 Q65 40 66 32 Z" />
          </g>
        )}
        {config.hairStyle === 'tied' && (
          <g fill={config.hairColor}>
            <circle cx="50" cy="13" r="8" />
            <path d="M30 36 C30 22 40 18 50 18 C60 18 70 22 70 36 C66 24 59 21 50 21 C41 21 34 24 30 36 Z" />
          </g>
        )}
        {config.hairStyle === 'curl' && (
          <g fill={config.hairColor}>
            <circle cx="34" cy="24" r="8" />
            <circle cx="50" cy="18" r="9" />
            <circle cx="66" cy="24" r="8" />
            <circle cx="29" cy="34" r="7" />
            <circle cx="71" cy="34" r="7" />
            <path d="M32 36 C32 24 40 20 50 20 C60 20 68 24 68 36 Z" />
          </g>
        )}

        {/* Eyes & Smile */}
        <circle cx="43" cy="40" r="2.5" fill="#1E293B" />
        <circle cx="57" cy="40" r="2.5" fill="#1E293B" />
        <circle cx="44" cy="39" r="0.8" fill="#FFFFFF" />
        <circle cx="58" cy="39" r="0.8" fill="#FFFFFF" />

        {/* Cheerful Smile */}
        <path
          d="M45 49 Q50 54 55 49"
          stroke="#9F5822"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Glasses if configured */}
        {config.hasGlasses && (
          <g stroke="#0F172A" strokeWidth="2" fill="rgba(255,255,255,0.25)">
            <rect x="36" y="34" width="13" height="11" rx="3" />
            <rect x="51" y="34" width="13" height="11" rx="3" />
            <line x1="49" y1="39" x2="51" y2="39" />
            <line x1="33" y1="37" x2="36" y2="38" />
            <line x1="64" y1="38" x2="67" y2="37" />
          </g>
        )}
      </svg>
    </div>
  );
};
