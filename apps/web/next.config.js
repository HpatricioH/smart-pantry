/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.openfoodfacts.org" },
    ],
  },

  // Make Next transpile your internal packages
  transpilePackages: ["@smart-pantry/api", "@smart-pantry/db"],

  // Allow importing from outside the app dir (monorepo)
  experimental: {
    externalDir: true,
  },

  turbopack: {
    resolveAlias: {}, // placeholder, not needed unless you add aliases
  },
};

export default nextConfig;
