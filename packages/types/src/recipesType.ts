import {z} from 'zod'

export const createRecipesSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string().url().or(z.string()),
  prepTime: z.string(),
  cookTime: z.string(),
  totalTime: z.string(),
  servings: z.number(),
  liked: z.boolean(),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
  tags: z.array(z.string()),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
  calories: z.number(),
})

export const getRecipeByIngredientsSchema = z.object({
  ingredients: z.array(z.string()),
})