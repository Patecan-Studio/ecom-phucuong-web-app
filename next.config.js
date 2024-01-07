/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
        {
          key: 'Access-Control-Allow-Origin',
          value: 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js'
        }
      ],
    },
  ],
  images: {
    domains: [`${process.env.SUPABSE_STORAGE_URL}.supabase.co`,"pos.nvncdn.net"],
    remotePatterns: [
      {
        hostname: 'directus-develop-4dfc.up.railway.app',
        protocol: 'https'
      }
    ]
  },
};

module.exports = nextConfig;
