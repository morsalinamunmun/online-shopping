/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.dummyjson.com'], // Allow loading images from all domains
        remotePatterns: [
          {
            protocol: "https",
            hostname: "",
          },
          ],
        },
};

export default nextConfig;
