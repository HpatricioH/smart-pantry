import "server-only";

import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { headers } from "next/headers";
import { cache } from "react";

import type { AppRouter } from "@smart-pantry/api";
import { createCaller } from "@smart-pantry/api";
import { createTRPCContext } from "@smart-pantry/api/trpc";
import { auth } from "@clerk/nextjs/server";
import { createQueryClient } from "./query-client";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(async () => {
  const base = await headers();
  const heads = new Headers(base);
  heads.set("x-trpc-source", "rsc");

  // Inject Clerk user id (RSC path bypasses API route handler where we already do this)
  try {
    const { userId } = await auth();
    if (userId) heads.set("x-clerk-user-id", userId);
  } catch (e) {
    // Swallow – auth() may throw if misconfigured; better to proceed unauthenticated
  }

  return createTRPCContext({ headers: heads });
});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(createContext);

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient,
);
