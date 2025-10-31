import {z} from "zod"

export const createItemPantryType = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.number(),
  unit: z.string(),
  image: z.string(),
  category: z.string(),
})

export const GetPantryItemSchema = z.object({
  category: z.string(),
})


export const updatePantryItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.number(),
  category: z.string(),
})

export const deletePantryItemSchema = z.object({
  id: z.string
})


export const upsertPantryItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.number(),
  category: z.string(),
  unit: z.string().optional(),
  image: z.string().optional()
});