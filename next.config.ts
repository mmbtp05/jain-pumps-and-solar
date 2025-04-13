import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com', 'cdn-ilchich.nitrocdn.com', 'thumbs.dreamstime.com', 'example.com'],
  },
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
