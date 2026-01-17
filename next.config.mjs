/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    domains: ["images.unsplash.com", "cdn.example.com"],
  },
};

export default nextConfig;
