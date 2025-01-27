/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nodejs-blog-app-clqq.onrender.com',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
