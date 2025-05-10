/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Enables static HTML export
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,     // Ensures correct paths in static export
  images: {
    loader: 'default',
    unoptimized: true,     // Required for static export on GitHub Pages
  },
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
};

module.exports = nextConfig;
