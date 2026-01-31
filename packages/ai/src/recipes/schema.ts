import { z } from "zod";

export const AiRecipeIngredientsSchema = z.object({
  name: z.string(),
  quantity: z.number().nullable(),
  unit: z.string().nullable(),
  optional: z.boolean().default(false),
  note: z.string().nullable().optional(),
});

export const AiRecipeStepSchema = z.object({
  order: z.number(),
  text: z.string(),
  timeSeconds: z.number().nullable().optional(),
});

export const AiRecipeSchema = z.object({
  title: z.string(),
  description: z.string().nullable().optional(),
  servings: z.number().nullable().optional(),
  totalTimeMinutes: z.number().nullable().optional(),
  difficulty: z.enum(["easy", "medium", "hard"]).nullable().optional(),
  tags: z.array(z.string()).default([]),
  ingredients: z.array(AiRecipeIngredientsSchema).nonempty(),
  steps: z.array(AiRecipeStepSchema).nonempty(),
});

export const AiRecipeListSchema = z.object({
  recipes: z.array(AiRecipeSchema).min(1).max(5),
});

export type AiRecipe = z.infer<typeof AiRecipeSchema>;
export type AiRecipeList = z.infer<typeof AiRecipeListSchema>;
