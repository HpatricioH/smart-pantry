import type { PantryItems } from "@smart-pantry/types";

export async function getPantryItems(): Promise<PantryItems[]> {
  const res = await fetch("/data/mock-pantry.json");

  if (!res.ok) throw new Error("Failed to fetch Pantry Items");

  return res.json();
}
