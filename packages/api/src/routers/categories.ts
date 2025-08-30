import {
  createTRPCRouter,
  protectedProcedure,
} from "../trpc"

export const categoriesRouter = createTRPCRouter({
  getAllCategories: protectedProcedure.query(async ({ ctx }) => {
    const getCategories = await ctx.db.query.categories.findMany()

    return getCategories ?? null;

  })
})