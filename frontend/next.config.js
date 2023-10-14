/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "api.uifaces.co",
        port: "",
        pathname: "/our-content/donated/**",
      },
    ],
  },
};

module.exports = nextConfig
