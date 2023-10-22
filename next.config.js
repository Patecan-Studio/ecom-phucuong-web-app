/** @type {import('next').NextConfig} */
const nextConfig = {
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
