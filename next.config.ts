/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL,
    APP_URL: process.env.APP_URL
  },
  images: { 
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'fastly.picsum.photos'
    },
    {
      protocol: 'https',
      hostname: 'picsum.photos'
    },
    {
      protocol: 'https',
      hostname: 'loremflickr.com'
    },
    {
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com'
    },
    {
      protocol: 'https',
      hostname: 'cloudflare-ipfs.com'
    }

  ]}
};

export default nextConfig;
