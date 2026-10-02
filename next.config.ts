import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 430, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384, 512, 640],
    qualities: [75, 80, 82],
    minimumCacheTTL: 31536000, // 1 year — images are static and hashed
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
