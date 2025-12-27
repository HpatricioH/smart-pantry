import { inArray, eq, asc, sql } from "drizzle-orm";
import {
  createTRPCRouter,
  protectedProcedure,
} from "../trpc"
import { TRPCError } from "@trpc/server";
import { createRecipesSchema, generateFromPantrySchema } from "../../../types/src/recipesType";
import {  recipeIngredients, recipes, recipeSteps } from "../../../db/src/schema/recipes";
import { pantry } from "@db/schema";
import type { PantryItemForAI } from "../../../ai/src/recipes/types"
import { generateRecipesFromPantryAndSave } from "../../../ai/src/recipes/generateRecipesFromPantryAndSave"

export const recipesRouter = createTRPCRouter({
  // Create recipes 
  createRecipes: protectedProcedure
    .input(createRecipesSchema)
    .mutation(async ({ctx, input }) => {
      return ctx.db.insert(recipes).values({
        ...input,
        userId: ctx.userId as string
      })
    }),

  
  // Get all recipes 
  getAllRecipes: protectedProcedure.query(async ({ ctx }) => {
    const getRecipesItems = await ctx.db.query.recipes.findMany();

    return getRecipesItems ?? null
  }),

  // Get all Recipes based on ingredients
  generateFromPantry: protectedProcedure
    .input(generateFromPantrySchema)
    .mutation(async ({ctx, input}) => {
      const userId = ctx.userId
      
      if(!userId) {
        throw new TRPCError({ code: "UNAUTHORIZED"})
      }

      // Fetch pantry items for the user
      const pantryRows = await ctx.db
        .select()
        .from(pantry)
        .where(eq(pantry.userId, userId))

      // Map DB rows into PantryItemTorAI[]
      const pantrySnapshot: PantryItemForAI[] = pantryRows.map((row) => ({        
        name: row.name,
        quantity: Number(row.quantity) ?? null,
        unit: row.unit?.toString() ?? null, 
        category: row.category ?? null, 
      }))

      if (pantrySnapshot.length === 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `No pantry items found for ${ctx.session.user}`
        })
      }

      // Build constraints for input 
      const constraints = {
        maxRecipes: input?.maxRecipes ?? 3,
        maxTimeMinutes: input?.maxTimeMinutes,
        diet: input?.diet ?? null, 
        dislikeIngredients: input?.dislikedIngredients ?? [],
        servings: input?.servings ?? null,
      }

      // Call Ai and DB server 
      const createdRecipes = await generateRecipesFromPantryAndSave({
        userId,
        pantrySnapshot, 
        constraints
      })

      // return summaries to client 
      return { 
        recipes: createdRecipes 
      }
    })
})