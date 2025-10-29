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
  name: z.string(),
  category: z.string(),
  id: z.string(),
  quantity: z.number(),
})

export const deletePantryItemSchema = z.object({
  id: z.string
})