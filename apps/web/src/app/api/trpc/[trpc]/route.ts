import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import type { NextRequest } from "next/server";

import { appRouter } from "@smart-pantry/api";
import { createTRPCContext } from "@smart-pantry/api/trpc";

export const runtime = "nodejs";

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () =>
      createTRPCContext({
        headers: req.headers,
      }),
    onError:
      process.env.NODE_ENV === "development"
        ? ({ path, error }) => {
            const err = error as unknown;
            const stack = typeof err === "object" && err && "stack" in err ? String((err as { stack?: unknown }).stack) : "<no-stack>";
            const cause = typeof err === "object" && err && "cause" in err ? String((err as { cause?: unknown }).cause) : "<no-cause>";
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}\nCause: ${cause}\nStack:\n${stack}`
            );
          }
        : undefined,
  });

export { handler as GET, handler as POST };