import z from "zod";
import { eq, and } from "drizzle-orm";
import { pantry } from "../../../db/src/schema/pantry";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import {
  createItemPantryType,
  deletePantryItemSchema,
  updatePantryItemSchema,
  GetPantryItemSchema,
  upsertPantryItemSchema,
} from "../../../types/src/pantryItemType";

export const pantryRouter = createTRPCRouter({
  // Test endpoint (public)
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  }),

  // Create Item Pantry
  createItemPantry: protectedProcedure
    .input(createItemPantryType)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.insert(pantry).values({
        ...input,
        userId: ctx.userId as string,
      });
    }),

  // Get all pantry items
  getAllPantryItems: protectedProcedure.query(async ({ ctx }) => {
    const getPantryItems = await ctx.db.query.pantry.findMany({
      where: eq(pantry.userId, ctx.userId as string),
    });

    return getPantryItems ?? null;
  }),

  // Get one pantry item
  getPantryItemByCategory: protectedProcedure
    .input(GetPantryItemSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.query.pantry.findMany({
        where: and(eq(pantry.category, input.category), eq(pantry.userId, ctx.userId as string)),
      });
    }),

  // Update pantry item
  updatePantryItem: protectedProcedure
    .input(updatePantryItemSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db
        .update(pantry)
        .set({
          ...input,
          userId: ctx.userId as string,
        })
        .where(and(eq(pantry.id, input.id)));
    }),

  // Create and Update pantry item
  upsertPantryItem: protectedProcedure
    .input(upsertPantryItemSchema)
    .mutation(async ({ ctx, input }) => {
      const { name, ...data } = input;

      const existingItem = await ctx.db.query.pantry.findFirst({
        where: (p, { eq, and }) => and(eq(p.userId, ctx.userId as string), eq(p.name, name)),
      });

      if (existingItem) {
        return ctx.db
          .update(pantry)
          .set({
            ...data,
            // quantity: input.quantity ?? 0 < (existingItem.quantity ?? 0) ? (existingItem.quantity ?? 0) - (input.quantity ?? 1) : (existingItem.quantity ?? 0) + (input.quantity ?? 1)
          })
          .where(eq(pantry.id, existingItem.id));
      }

      return ctx.db.insert(pantry).values({
        ...input,
        userId: ctx.userId as string,
      });
    }),

  // Delete pantry item
  deletePantryItem: protectedProcedure
    .input(deletePantryItemSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(pantry)
        .where(and(eq(pantry.id, input.id as string), eq(pantry.userId, ctx.userId as string)));
    }),
});
