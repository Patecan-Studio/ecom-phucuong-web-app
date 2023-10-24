/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],

  images: {
    domains: ["nuwwaqzrwtilsxbajubq.supabase.co"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
