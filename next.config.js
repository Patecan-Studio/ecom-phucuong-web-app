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
    domains: ["nuwwaqzrwtilsxbajubq.supabase.co"]
  },
};

module.exports = nextConfig;
