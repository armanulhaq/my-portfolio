import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: ["cdn.dribbble.com", "img.icons8.com", "brandfetch.com"], // allow GIFs/images from this host
    },
};

export default nextConfig;
