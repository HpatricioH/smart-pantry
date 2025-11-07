import {z} from "zod"

export const createItemPantryType = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.string(),
  unit: z.number().int().min(1).default(1),
  image: z.string(),
  category: z.string(),
})

export const GetPantryItemSchema = z.object({
  category: z.string(),
})


export const updatePantryItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.string(),
  category: z.string(),
})

export const deletePantryItemSchema = z.object({
  id: z.string
})


export const upsertPantryItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.string(),
  category: z.string(),
  unit: z.number().int().min(1).default(1),
  image: z.string().optional()
});