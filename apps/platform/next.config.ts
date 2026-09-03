import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: [
    '@yukthimantra/api-client',
    '@yukthimantra/config',
    '@yukthimantra/design-system',
    '@yukthimantra/types',
    '@yukthimantra/ui',
    '@yukthimantra/utils',
  ],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
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
