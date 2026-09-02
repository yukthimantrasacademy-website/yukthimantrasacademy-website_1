'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';

interface ProgrammeGraphicProps {
  programmeId?: string;
  category?: string;
  title?: string;
  className?: string;
}

interface GraphicTheme {
  primaryColor: string;
  accentColor: string;
  bgGrad: [string, string];
  iconSymbol: string;
  tag: string;
  figureBadge: string;
}

const PROGRAMME_THEMES: Record<string, GraphicTheme> = {
  'prog-01': {
    primaryColor: '#0284C7',
    accentColor: '#C0F050',
    bgGrad: ['#0c213b', '#1e3a8a'],
    iconSymbol: 'bar_chart',
    tag: 'Clinical Data Analytics',
    figureBadge: 'SQL & Power BI',
  },
  'prog-02': {
    primaryColor: '#8B5CF6',
    accentColor: '#38BDF8',
    bgGrad: ['#1e1b4b', '#3b0764'],
    iconSymbol: 'psychology',
    tag: 'Applied AI & ML',
    figureBadge: 'Predictive Models',
  },
  'prog-03': {
    primaryColor: '#EC4899',
    accentColor: '#FDE047',
    bgGrad: ['#500724', '#831843'],
    iconSymbol: 'neurology',
    tag: 'Deep Learning & NLP',
    figureBadge: 'Clinical NLP',
  },
  'prog-04': {
    primaryColor: '#10B981',
    accentColor: '#A7F3D0',
    bgGrad: ['#022c22', '#064e3b'],
    iconSymbol: 'auto_awesome',
    tag: 'GenAI & Automation',
    figureBadge: 'Clinical LLMs',
  },
  'prog-05': {
    primaryColor: '#F59E0B',
    accentColor: '#FEF08A',
    bgGrad: ['#451a03', '#78350f'],
    iconSymbol: 'code',
    tag: 'Python For Healthcare',
    figureBadge: 'Pipelines & APIs',
  },
  'prog-06': {
    primaryColor: '#06B6D4',
    accentColor: '#67E8F9',
    bgGrad: ['#083344', '#155e75'],
    iconSymbol: 'cloud',
    tag: 'Cloud & MLOps',
    figureBadge: 'Model Deployment',
  },
  'prog-07': {
    primaryColor: '#2563EB',
    accentColor: '#93C5FD',
    bgGrad: ['#172554', '#1e40af'],
    iconSymbol: 'verified_user',
    tag: 'AAPC CPC® Certification',
    figureBadge: 'Medical Coding',
  },
  'prog-08': {
    primaryColor: '#7C3AED',
    accentColor: '#DDD6FE',
    bgGrad: ['#2e1065', '#581c87'],
    iconSymbol: 'apartment',
    tag: 'AHIMA CCS® Inpatient',
    figureBadge: 'Hospital Coding',
  },
  'prog-09': {
    primaryColor: '#059669',
    accentColor: '#A7F3D0',
    bgGrad: ['#064e3b', '#047857'],
    iconSymbol: 'payments',
    tag: 'Revenue Cycle Management',
    figureBadge: 'US Healthcare Billing',
  },
  'prog-10': {
    primaryColor: '#0284C7',
    accentColor: '#BAE6FD',
    bgGrad: ['#082f49', '#0369a1'],
    iconSymbol: 'devices',
    tag: 'EHR & Health IT',
    figureBadge: 'Epic & Cerner HL7',
  },
  'prog-11': {
    primaryColor: '#D946EF',
    accentColor: '#C0F050',
    bgGrad: ['#4a044e', '#701a75'],
    iconSymbol: 'layers',
    tag: 'Dual Specialisation Track',
    figureBadge: 'Domain + Tech Stack',
  },
};

const DEFAULT_THEME: GraphicTheme = {
  primaryColor: '#1676B0',
  accentColor: '#C0F050',
  bgGrad: ['#0f172a', '#1e293b'],
  iconSymbol: 'school',
  tag: 'YukthiMantra Academy Track',
  figureBadge: 'Certified Programme',
};

export const ProgrammeGraphic: React.FC<ProgrammeGraphicProps> = ({
  programmeId = 'prog-01',
  category,
  title,
  className,
}) => {
  const theme = PROGRAMME_THEMES[programmeId] || DEFAULT_THEME;

  return (
    <div
      className={cn('relative w-full h-full min-h-[190px] overflow-hidden flex items-center justify-center select-none', className)}
      style={{
        background: `linear-gradient(135deg, ${theme.bgGrad[0]} 0%, ${theme.bgGrad[1]} 100%)`,
      }}
    >
      <svg
        viewBox="0 0 400 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
      >
        <defs>
          <linearGradient id={`grad-glow-${programmeId}`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor={theme.accentColor} stopOpacity="0.25" />
            <stop offset="1" stopColor={theme.primaryColor} stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`grad-card-${programmeId}`} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="rgba(255,255,255,0.12)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.03)" />
          </linearGradient>
        </defs>

        {/* Ambient Grid Pattern */}
        <path d="M0 40 H400 M0 90 H400 M0 140 H400 M0 190 H400" stroke="rgba(255,255,255,0.06)" strokeDasharray="6 6" />
        <path d="M80 0 V240 M160 0 V240 M240 0 V240 M320 0 V240" stroke="rgba(255,255,255,0.06)" strokeDasharray="6 6" />

        {/* Dynamic Glow Sphere */}
        <circle cx="200" cy="120" r="110" fill={`url(#grad-glow-${programmeId})`} />

        {/* Center UI Showcase Card */}
        <rect x="50" y="35" width="300" height="170" rx="14" fill={`url(#grad-card-${programmeId})`} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

        {/* Top Card Bar */}
        <circle cx="72" cy="55" r="4.5" fill="#EF4444" />
        <circle cx="86" cy="55" r="4.5" fill="#F59E0B" />
        <circle cx="100" cy="55" r="4.5" fill="#10B981" />
        <line x1="120" y1="55" x2="330" y2="55" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />

        {/* Left Side: Character Figure Avatar */}
        <g transform="translate(75, 80)">
          {/* Character Figure Bubble */}
          <circle cx="36" cy="36" r="32" fill={theme.primaryColor} stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          
          {/* Stylized Person Figure */}
          <ellipse cx="36" cy="28" rx="11" ry="12" fill="#E5A67C" />
          <path d="M25 24 C25 15 31 12 36 12 C41 12 47 15 47 24 C44 18 40 15 36 15 C32 15 28 18 25 24 Z" fill="#1E293B" />
          {/* Eyes & Glasses */}
          <circle cx="32" cy="28" r="1.5" fill="#1E293B" />
          <circle cx="40" cy="28" r="1.5" fill="#1E293B" />
          <rect x="28" y="24" width="7" height="6" rx="1.5" fill="none" stroke="#FFFFFF" strokeWidth="1" />
          <rect x="37" y="24" width="7" height="6" rx="1.5" fill="none" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="35" y1="27" x2="37" y2="27" stroke="#FFFFFF" strokeWidth="1" />
          {/* Body */}
          <path d="M18 64 C18 47 26 42 36 42 C46 42 54 47 54 64 Z" fill={theme.accentColor} />
          <path d="M32 42 L36 49 L40 42 Z" fill="#FFFFFF" />
        </g>

        {/* Right Side: Data Waves & Metrics */}
        <g transform="translate(165, 80)">
          {/* Badge Pill */}
          <rect width="165" height="24" rx="12" fill="rgba(0,0,0,0.3)" stroke={theme.accentColor} strokeWidth="1" />
          <text x="12" y="16" fill={theme.accentColor} fontSize="11" fontFamily="sans-serif" fontWeight="700">
            {theme.figureBadge}
          </text>

          {/* Metric Bar 1 */}
          <rect y="36" width="165" height="12" rx="6" fill="rgba(255,255,255,0.08)" />
          <rect y="36" width="130" height="12" rx="6" fill={theme.primaryColor} />

          {/* Metric Bar 2 */}
          <rect y="56" width="165" height="12" rx="6" fill="rgba(255,255,255,0.08)" />
          <rect y="56" width="95" height="12" rx="6" fill={theme.accentColor} />

          {/* Code / Wave pulses */}
          <path d="M0 86 L25 86 L35 72 L45 98 L55 80 L65 86 L165 86" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Bottom Tag */}
        <text x="200" y="222" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="sans-serif" fontWeight="600" letterSpacing="0.5">
          {category || theme.tag}
        </text>
      </svg>
    </div>
  );
};
