/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.frequencia.com.br',
        port: '',
        pathname: '/~aaaa/up/**',
      },
    ],
  },
};

module.exports = nextConfig
