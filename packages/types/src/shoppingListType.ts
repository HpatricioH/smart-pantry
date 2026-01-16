import { z } from "zod";

export const createShoppingListItemSchema = z.object({
  name: z.string(),
  category: z.string(),
})

export const deleteShoppingListItemSchema = z.object({
  id: z.string(),
})