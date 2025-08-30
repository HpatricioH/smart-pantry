import {z} from "zod"

export const getCategoriesType = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  sort_order: z.number(),
})