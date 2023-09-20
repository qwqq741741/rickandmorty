/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        port: "",
        pathname: "/api/character/avatar/**",
      },
    ],
  },
};
