/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    BACKEND_URL: "http://localhost:8000/api",
  },
};

module.exports = nextConfig;
