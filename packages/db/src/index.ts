export { getRecipes } from "./queries/getRecipes";
export { getPantryItems } from "./queries/getPantryItems";
export { getCategories } from "./queries/getCategories";
import { createClient } from "@libsql/client";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

config({ path: ".env" });

// Cache the database connection in development without using TS `as` assertions at runtime.
declare global {
  // Augment the global scope with a cached client for dev hot reloads
  // eslint-disable-next-line no-var
  var __tursoClient: ReturnType<typeof createClient> | undefined;
}

const makeClient = () =>
  createClient({
    url:
      process.env.TURSO_CONNECTION_URL ??
      (() => {
        throw new Error("TURSO_CONNECTION_URL is not defined");
      })(),
    authToken:
      process.env.TURSO_AUTH_TOKEN ??
      (() => {
        throw new Error("TURSO_AUTH_TOKEN is not defined");
      })(),
  });

// Use a global singleton in dev to avoid exhausting connections.
export const client = globalThis.__tursoClient ?? makeClient();
if (process.env.NODE_ENV !== "production") {
  globalThis.__tursoClient = client;
}

export const db = drizzle(client, { schema });