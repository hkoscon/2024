/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/2024',
  productionBrowserSourceMaps: true,
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
