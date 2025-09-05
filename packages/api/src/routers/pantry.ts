import z from "zod"
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../trpc"
import { eq } from 'drizzle-orm';
import { createItemPantryType } from "../../../types/src/pantryItemType"
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
  getPantryItem: protectedProcedure
    .input(GetPantryItemSchema)
    .query(async ({ ctx, input}) => {
      return ctx.db.query.pantry.findMany({
        where: eq(pantry.category, input.category)
      })
    })
    

})