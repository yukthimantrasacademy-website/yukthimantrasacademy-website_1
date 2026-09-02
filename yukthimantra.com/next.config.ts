import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* Image optimization */
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  /* Strict mode for catching issues */
  reactStrictMode: true,

  /* Headers for security */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
