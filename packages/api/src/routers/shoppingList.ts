import { eq, and } from 'drizzle-orm';
import { shoppingList } from "../../../db/src/schema/shoppingList"
import {
  createTRPCRouter,
  protectedProcedure,
} from "../trpc"
import {
  createShoppingListItemSchema,
  deleteShoppingListItemSchema 
} from "../../../types/src/shoppingListType"

export const shoppingListRouter = createTRPCRouter({
  // Create Shopping List Item
  createShoppingListItem: protectedProcedure
    .input(createShoppingListItemSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.insert(shoppingList).values({
        ...input, 
        userId: ctx.userId as string
      })
    }),
  
  // get All Shopping List Items
  getAllShoppingListItems: protectedProcedure.query(async ({ ctx }) => {
    const getShoppingListItems = await ctx.db.query.shoppingList.findMany({
      where: eq(shoppingList.userId, ctx.userId as string)
    })

    return getShoppingListItems ?? null
  }),

  // Delete Shopping List Item
  deleteShoppingListItem: protectedProcedure
    .input(deleteShoppingListItemSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db
        .delete(shoppingList)
        .where(
          and(
            eq(shoppingList.id, input.id),
            eq(shoppingList.userId, ctx.userId as string)
          )
        )
    })
})