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
  serverExternalPackages: [
    "libsql",
    "@libsql/client",
    "@libsql/hrana-client",
    "@libsql/hrana",
  ],

  webpack: (config, { isServer }) => {
    if (isServer) {
      const externals = Array.isArray(config.externals)
        ? config.externals
        : config.externals
        ? [config.externals]
        : [];
      externals.push(/^@libsql\//, /^libsql(\/.*)?$/);
      config.externals = externals;

      // (Optional) Treat non-code artifacts under @libsql as source to avoid parsing
      config.module.rules.push({
        test: /node_modules[\\/](?:@libsql)[\\/].*\.(md|markdown|txt|license|changelog)$/i,
        type: "asset/source",
      });
    }
    return config;
  },
};

export default nextConfig;
