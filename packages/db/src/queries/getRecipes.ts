import type { Recipe } from "../../../types";

export async function getRecipes(): Promise<Recipe[]> {
  const res = await fetch("/data/recipes.json");

  if (!res.ok) throw new Error("Failed to fetch recipes");

  return res.json();
}
