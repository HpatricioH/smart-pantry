import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL not set – add it to packages/db/.env or root .env");
}
if (!process.env.TURSO_AUTH_TOKEN) {
  throw new Error("TURSO_AUTH_TOKEN not set – create a token: turso db tokens create <db-name>");
}

// Drizzle kit sqlite config doesn't accept authToken directly; embed it in the URL if not already there.
const baseUrl = process.env.DATABASE_URL as string;
const token = process.env.TURSO_AUTH_TOKEN as string;
const finalUrl = baseUrl.includes("authToken=")
  ? baseUrl
  : `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}authToken=${encodeURIComponent(token)}`;

export default defineConfig({
  schema: "./src/schema/index.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    // Token embedded so drizzle-kit sends it with remote libsql requests.
    url: finalUrl,
  },
  verbose: true,
  strict: true,
});
