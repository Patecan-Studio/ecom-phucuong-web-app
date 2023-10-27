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
    domains: ["nuwwaqzrwtilsxbajubq.supabase.co","pos.nvncdn.net"]
  },
};

module.exports = nextConfig;
