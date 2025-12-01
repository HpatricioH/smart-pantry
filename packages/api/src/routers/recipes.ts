import { inArray, eq, asc, sql } from "drizzle-orm";
import {
  createTRPCRouter,
  protectedProcedure,
} from "../trpc"
import { createRecipesSchema, getRecipeByIngredientsSchema } from "../../../types/src/recipesType";
import {  recipeIngredients, recipes, recipeSteps } from "../../../db/src/schema/recipes";

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
  getAllRecipesByIngredients: protectedProcedure
    .input(getRecipeByIngredientsSchema)
    .query(async ({ctx, input}) => {
      
      // Step 1: recipe ids that match any ingredient in the list 
      const recipeIds = await ctx.db
        .selectDistinct({ recipeId: recipeIngredients.recipeId })
        .from(recipeIngredients)
        .where(inArray(recipeIngredients.line, input.ingredients))


      if (recipeIds.length === 0) return []

      // step 2: fetch the recipe + relations 
      const ids = recipeIds.map(r => r.recipeId)


      const base = await ctx.db
        .select()
        .from(recipes)
        .where(inArray(recipes.id, ids))

      const ingredientsRows = await ctx.db 
        .select()
        .from(recipeIngredients)
        .where(inArray(recipeIngredients.recipeId, ids))

      const stepsRows = await ctx.db
        .select()
        .from(recipeSteps)
        .where(inArray(recipeSteps.recipeId, ids))
        .orderBy(asc(recipeSteps.order))

      
        const byId = new Map(base.map(r => [r.id, { ...r, ingredients: [] as string[], instructions: [] as string[] }]))
        for(const ing of ingredientsRows) byId.get(ing.recipeId)?.ingredients.push(ing.line)
        for(const st of stepsRows) byId.get(st.recipeId)?.instructions.push(st.step)

        return Array.from(byId.values())
    })
})