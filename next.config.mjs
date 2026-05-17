/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // 将来 WordPress (Headless) を併用するときの画像ドメイン
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'cms.cebuinvest.jp',
      // },
    ],
  },
};

export default nextConfig;
