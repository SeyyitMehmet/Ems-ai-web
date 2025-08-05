/** @type {import('next').NextConfig} */
const nextConfig = {
  // SİZİN MEVCUT AYARLARINIZ
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // EKLENMESİ GEREKEN YÖNLENDİRME KURALI
  async rewrites() {
    return [
      {
        source: '/api/python-chatbot/:path*',
        destination: 'http://localhost:8000/api/python-chatbot/:path*',
      },
    ];
  },
};

export default nextConfig;