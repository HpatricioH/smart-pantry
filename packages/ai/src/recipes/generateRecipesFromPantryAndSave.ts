import { nanoid } from "nanoid";
import { db } from "../../../db";
import { recipes, recipeIngredients, recipeSteps } from "../../../db/src/schema/recipes";
import type { AiRecipeList } from "./schema";
import type {
  PantryItemForAI,
  GenerateFromPantryConstraints,
  GenerateFromPantryInput,
  GeneratedRecipeSummary,
} from "./types";
import { generateRecipesFromPantry } from "./generateFromPantry";

export async function generateRecipesFromPantryAndSave(
  input: GenerateFromPantryInput & { userId: string },
): Promise<GeneratedRecipeSummary[]> {
  const { userId, pantrySnapshot, constraints = {} } = input;

  if (!userId) {
    throw new Error("generatedRecipesFromPantryAndSave: userId is required");
  }

  // call AI function and validate recipes
  const aiResult: AiRecipeList = await generateRecipesFromPantry({
    pantrySnapshot,
    constraints,
  });

  // Save recipes in transaction
  const createdRecipes = await db.transaction(async (ctx) => {
    const summaries: GeneratedRecipeSummary[] = [];

    for (const aiRecipe of aiResult.recipes) {
      const recipeId = nanoid();

      // Insert into recipe table
      await ctx.insert(recipes).values({
        id: recipeId,
        userId,
        title: aiRecipe.title,
        description: aiRecipe.description ?? null,
        sourceType: "ai_generator",
        status: "draft",
        totalTime: aiRecipe.totalTimeMinutes !== null ? String(aiRecipe.totalTimeMinutes) : null,
        prepTime: null,
        cookTime: null,
        servings: aiRecipe.servings !== null ? Number(aiRecipe.servings) : 0,
        difficulty: aiRecipe.difficulty ?? null,
        image: null,
        primaryCategoryId: null,
      });

      // insert ingredients
      for (const ing of aiRecipe.ingredients) {
        await ctx.insert(recipeIngredients).values({
          id: nanoid(),
          recipeId,
          pantryProductId: null,
          name: ing.name,
          quantity: ing.quantity,
          unit: ing.unit,
          optional: ing.optional ?? false,
          note: ing.note ?? null,
        });
      }

      // insert steps
      for (const step of aiRecipe.steps) {
        await ctx.insert(recipeSteps).values({
          id: nanoid(),
          recipeId,
          order: step.order,
          text: step.text,
          timerSeconds: step.timeSeconds ?? null,
        });
      }

      summaries.push({
        id: recipeId,
        title: aiRecipe.title,
        description: aiRecipe.description ?? null,
        servings: aiRecipe.servings ?? null,
        maxTimeMinutes: aiRecipe.totalTimeMinutes,
        ingredients: aiRecipe.ingredients,
        sourceType: "ai_generated",
        status: "draft",
      });
    }

    return summaries;
  });

  return createdRecipes;
}
