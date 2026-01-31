import { cache } from "react";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const categoriesRouter = createTRPCRouter({
  getAllCategories: protectedProcedure.query(async ({ ctx }) => {
    const cacheKey = "categories:list";
    const cached = await ctx.cache.get(cacheKey);

    if (cached) {
      return cached;
    }

    const getCategories = await ctx.db.query.categories.findMany();

    await ctx.cache.set(cacheKey, getCategories, 90 * 90);

    return getCategories ?? null;
  }),
});
