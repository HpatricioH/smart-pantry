import type { Category } from "@smart-pantry/types"

export async function getCategories(): Promise<Category[]> {
  const res = await fetch ("/data/categories.json")

  if(!res.ok) throw new Error("Failed to fetch Pantry Items")

  return res.json()
}