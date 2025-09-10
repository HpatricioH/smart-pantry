import {z} from "zod"

export const createItemPantryType = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  quantity: z.number(),
  image: z.string(),
  category: z.string(),
})

export const GetPantryItemSchema = z.object({
  category: z.string(),
})


export const updatePantryItemSchema = z.object({
  id: z.string(),
  userId: z.string(),
  quantity: z.number(),
})

export const deletePantryItemSchema = z.object({
  id: z.string
})