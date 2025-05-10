/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Enables static HTML export
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'default',
  },
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;
