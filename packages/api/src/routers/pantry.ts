import z from "zod"
import { eq, and } from 'drizzle-orm';
import { pantry } from "../../../db/src/schema/pantry"
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../trpc"
import { 
  createItemPantryType, 
  deletePantryItemSchema, 
  updatePantryItemSchema, 
  GetPantryItemSchema 
} from "../../../types/src/pantryItemType"


export const pantryRouter = createTRPCRouter({
  // Test endpoint (public)
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`
      }
    }),

  // Create Item Pantry 
  createItemPantry: protectedProcedure
    .input(createItemPantryType)
    .mutation(async ({ctx, input }) => {
      return ctx.db.insert(pantry).values({
        ...input,
        userId: ctx.userId as string
      })
    }),

  // Get all pantry items
  getAllPantryItems: protectedProcedure.query(async ({ ctx }) => {
    const getPantryItems = await ctx.db.query.pantry.findMany({
      where: eq(pantry.userId, ctx.userId as string)
    });

    return getPantryItems ?? null
  }),

  // Get one pantry item 
  getPantryItemByCategory: protectedProcedure
    .input(GetPantryItemSchema)
    .query(async ({ ctx, input}) => {
      return ctx.db.query.pantry.findMany({
        where: and(
          eq(pantry.category, input.category),
          eq(pantry.userId, ctx.userId as string)
        )
      })
    }),


  // Update pantry item 
  updatePantryItem: protectedProcedure
    .input(updatePantryItemSchema)
    .mutation(async ({ctx, input}) => {
      return ctx.db.update(pantry)
        .set({
          ...input,
          userId: ctx.userId as string,
        })
        .where(
          and(
            eq(pantry.id, input.id),
          )
        );
    }),


  // Delete pantry item 
  deletePantryItem: protectedProcedure
    .input(deletePantryItemSchema)
    .mutation(async ({ctx, input}) => {
      await ctx.db 
        .delete(pantry)
        .where(
          and(
            eq(pantry.id, input.id as string),
            eq(pantry.userId, ctx.userId as string)
          )
        )
    })
})