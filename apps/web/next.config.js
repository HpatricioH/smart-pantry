/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.openfoodfacts.org"}
    ]
  },

  // Make Next transpile your internal packages
  transpilePackages: ["@smart-pantry/api", "@smart-pantry/db"],

  // Allow importing from outside the app dir (monorepo)
  experimental: {
    externalDir: true,
  },

  // Externalize server-only deps to keep webpack from bundling them server-side
  // serverExternalPackages: [
  //   "libsql",
  //   "@libsql/client",
  //   "@libsql/hrana-client",
  //   "@libsql/hrana",
  // ],

  turbopack: {
    resolveAlias: {}, // placeholder, not needed unless you add aliases
    // Externalize these packages in Turbopack
    serverExternalPackages: [
      "libsql",
      "@libsql/client",
      "@libsql/hrana-client",
      "@libsql/hrana",
    ],
  },
};

export default nextConfig;
