export { getRecipes } from "./queries/getRecipes";
export { getPantryItems } from "./queries/getPantryItems";
import { createClient } from "@libsql/client";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

// Attempt to load env vars from several typical monorepo locations (non-destructive: first wins for each var)
(() => {
  const candidates = [
    // Prefer explicit local overrides
    ".env.local",
    ".env",
    // Monorepo root (when code runs from a nested package)
    "../.env.local",
    "../.env",
    // Two levels up (in case of packages/db loaded from apps/web)
    "../../.env.local",
    "../../.env",
  ];
  for (const p of candidates) {
    // dotenv won't overwrite existing vars unless override:true; we keep default (false)
    config({ path: p });
    if (process.env.DATABASE_URL && process.env.TURSO_AUTH_TOKEN) break;
  }
})();

// Cache the database connection in development without using TS `as` assertions at runtime.
declare global {
  // Augment the global scope with a cached client for dev hot reloads
  // eslint-disable-next-line no-var
  var __tursoClient: ReturnType<typeof createClient> | undefined;
}

const makeClient = () => {
  const url = process.env.DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;
  if (!url) {
    throw new Error("DATABASE_URL is not set. Expected libsql://<db-name>-<org>.turso.io");
  }
  if (!authToken) {
    throw new Error(
      "TURSO_AUTH_TOKEN is not set. Generate a db token with 'turso db tokens create <db>'",
    );
  }
  return createClient({ url, authToken });
};

// Use a global singleton in dev to avoid exhausting connections.
export const client = globalThis.__tursoClient ?? makeClient();
if (process.env.NODE_ENV !== "production") {
  globalThis.__tursoClient = client;
}

export const db = drizzle(client, { schema });
