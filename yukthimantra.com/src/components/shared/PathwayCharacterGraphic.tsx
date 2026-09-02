'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';

interface PathwayCharacterGraphicProps {
  className?: string;
  category?: string;
}

export const PathwayCharacterGraphic: React.FC<PathwayCharacterGraphicProps> = ({
  className,
}) => {
  return (
    <div
      className={cn('relative w-full h-full min-h-[180px] overflow-hidden rounded-2xl flex items-center justify-center', className)}
      style={{
        background: 'linear-gradient(135deg, #0b192e 0%, #173252 50%, #0d213a 100%)',
      }}
    >
      <svg
        viewBox="0 0 400 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
      >
        <defs>
          <linearGradient id="bgGrid" x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B192E" />
            <stop offset="1" stopColor="#1E3A8A" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="glowCircle" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#C0F050" stopOpacity="0.25" />
            <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#1E293B" />
            <stop offset="1" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="charGrad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#0284C7" />
            <stop offset="1" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>

        {/* Ambient Grid Lines */}
        <path d="M0 40 H400 M0 90 H400 M0 140 H400 M0 190 H400" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
        <path d="M80 0 V220 M160 0 V220 M240 0 V220 M320 0 V220" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

        {/* Ambient Glow */}
        <circle cx="200" cy="110" r="100" fill="url(#glowCircle)" />

        {/* Floating Data Nodes (Healthcare + Tech) */}
        {/* Node 1: Clinical ML */}
        <g transform="translate(40, 45)">
          <rect width="90" height="34" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.2" opacity="0.9" />
          <circle cx="16" cy="17" r="5" fill="#38BDF8" />
          <text x="28" y="21" fill="#E2E8F0" fontSize="10" fontFamily="sans-serif" fontWeight="600">AI Diagnostics</text>
        </g>

        {/* Node 2: Analytics Metric */}
        <g transform="translate(265, 35)">
          <rect width="95" height="34" rx="8" fill="#1E293B" stroke="#C0F050" strokeWidth="1.2" opacity="0.9" />
          <circle cx="16" cy="17" r="5" fill="#C0F050" />
          <text x="28" y="21" fill="#E2E8F0" fontSize="10" fontFamily="sans-serif" fontWeight="600">99.4% Accuracy</text>
        </g>

        {/* Node 3: Medical Coding */}
        <g transform="translate(270, 150)">
          <rect width="92" height="34" rx="8" fill="#1E293B" stroke="#A855F7" strokeWidth="1.2" opacity="0.9" />
          <circle cx="16" cy="17" r="5" fill="#A855F7" />
          <text x="28" y="21" fill="#E2E8F0" fontSize="10" fontFamily="sans-serif" fontWeight="600">CPC Certified</text>
        </g>

        {/* Central Character Figure (Learner at Digital Workstation) */}
        {/* Computer Screen */}
        <rect x="135" y="105" width="130" height="75" rx="8" fill="url(#screenGrad)" stroke="#64748B" strokeWidth="1.5" />
        <rect x="142" y="112" width="116" height="50" rx="4" fill="#0B132B" />
        
        {/* Code / Clinical Wave on Screen */}
        <path d="M150 142 L165 142 L172 125 L180 152 L188 135 L195 142 L248 142" stroke="#C0F050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="172" cy="125" r="2.5" fill="#38BDF8" />
        <circle cx="180" cy="152" r="2.5" fill="#38BDF8" />
        
        {/* Stand */}
        <path d="M190 180 L210 180 L205 195 L195 195 Z" fill="#64748B" />
        <rect x="180" y="195" width="40" height="4" rx="2" fill="#94A3B8" />

        {/* Character Back/Side view */}
        <ellipse cx="200" cy="85" rx="16" ry="17" fill="#E5A67C" />
        <path d="M184 80 C184 66 193 62 200 62 C207 62 216 66 216 80 C212 70 206 66 200 66 C194 66 188 70 184 80 Z" fill="#1E293B" />
        <path d="M175 125 C175 102 185 96 200 96 C215 96 225 102 225 125 Z" fill="url(#charGrad)" />
        <circle cx="200" cy="78" r="1.5" fill="#38BDF8" opacity="0.8" />
      </svg>
    </div>
  );
};
