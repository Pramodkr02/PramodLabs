/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  trailingSlash: false,
  output: "standalone",
};

module.exports = nextConfig;
