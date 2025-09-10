import z from "zod"
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../trpc"
import { eq, and } from 'drizzle-orm';
import { createItemPantryType, deletePantryItemSchema, updatePantryItemSchema } from "../../../types/src/pantryItemType"
import { GetPantryItemSchema } from "../../../types/src/pantryItemType"
import { pantry } from "../../../db/src/schema/pantry"


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
    const getPantryItems = await ctx.db.query.pantry.findMany();

    return getPantryItems ?? null
  }),

  // Get one pantry item 
  getPantryItemByCategory: protectedProcedure
    .input(GetPantryItemSchema)
    .query(async ({ ctx, input}) => {
      return ctx.db.query.pantry.findMany({
        where: eq(pantry.category, input.category)
      })
    }),


  // Update pantry item 
  updatePantryItem: protectedProcedure
    .input(updatePantryItemSchema)
    .mutation(async ({ctx, input}) => {
      return ctx.db.update(pantry)
        .set({
          ...input,
        })
        .where(
          and(
            eq(pantry.id, input.id),
            eq(pantry.userId, ctx.userId as string)
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