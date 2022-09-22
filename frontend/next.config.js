/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  generateBuildId: () => "cafemoment",
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
