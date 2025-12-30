export type PantryItemForAI = { 
  name: string; 
  quantity: number | null;
  unit: string | null;
  category?: string | null;
};

export type GenerateFromPantryConstraints = {
  maxRecipes?: number;
  maxTimeMinutes?: number;
  diet?: string | null; 
  dislikedIngredients?: string[];
  servings?: number | null;
};

export type Ingredients = {
  name: string;
  quantity: number | null;
  unit: string | null;
  optional: boolean;
  note?: string | null | undefined;
}

export type GenerateFromPantryInput = {
  userId?: string; 
  pantrySnapshot: PantryItemForAI[];
  constraints?: GenerateFromPantryConstraints;
};

export type GeneratedRecipeSummary = {
  id: string; 
  title: string;
  description: string | null; 
  servings: number | null;
  maxTimeMinutes: number | null | undefined;
  ingredients: Ingredients[];
  sourceType: string; 
  status: string; 
}