/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Enables static HTML export
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,     // Ensures correct paths in static export
  images: {
    loader: 'default',
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
};

module.exports = nextConfig;
