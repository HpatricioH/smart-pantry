import { categoriesRouter } from "./routers/categories";
import { pantryRouter } from "./routers/pantry";
import { recipesRouter } from "./routers/recipes";
import { createCallerFactory, createTRPCRouter } from "./trpc";

/**
 * This is the primary router the server.
 *
 * All routers added in /api/routers should be manually added here.
 */

export const appRouter = createTRPCRouter({
  pantry: pantryRouter,
  categories: categoriesRouter,
  recipes: recipesRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter)