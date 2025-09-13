import z from "zod"
import { eq, and } from 'drizzle-orm';
import {
  createTRPCRouter,
  protectedProcedure,
} from "../trpc"
import { createRecipesSchema, getRecipeByIngredientsSchema } from "@smart-pantry/types";
import { recipes } from "../../../db/src/schema/recipes";

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
  // getAllRecipesByIngredients: protectedProcedure
  //   .input(getRecipeByIngredientsSchema)
  //   .query(async ( {ctx, input}) => {
  //     return ctx.db.query.recipes.findMany({
  //       with: {

  //       }
  //     })
  //   })



})