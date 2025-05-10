/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
  assetPrefix: '',
  images: {
    loader: 'default',
  },
};

module.exports = nextConfig;
