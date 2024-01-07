/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    // {
    //   source: '/(.*)',
    //   headers: [
    //     {
    //       key: 'Cache-Control',
    //       value: 'no-store',
    //     },
    //   ],
    // },
  ],
  images: {
    domains: [`${process.env.SUPABSE_STORAGE_URL}.supabase.co`,"pos.nvncdn.net"]
  },
};

module.exports = nextConfig;
