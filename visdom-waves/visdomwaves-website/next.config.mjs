/** @type {import('next').NextConfig} */
const nextConfig = {
  // If your website will be deployed in a subdirectory, uncomment and update the basePath
  // For example, if your site is at yourdomain.com/visdomwaves/, use:
  basePath: '',

  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Server mode for Image Optimization and API routes
  // If you need static export, see PERFORMANCE_IMPROVEMENTS.md for alternative configuration
  output: 'standalone',
  // Configure trailing slash behavior
  trailingSlash: true,
};

export default nextConfig;