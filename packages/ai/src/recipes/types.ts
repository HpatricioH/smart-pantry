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

export type GenerateFromPantryInput = {
  userId?: string; 
  pantrySnapshot: PantryItemForAI[];
  constraints?: GenerateFromPantryConstraints;
};

export type GeneratedRecipeSummary = {
  id: string; 
  title: string;
  description: string | null; 
  sourceType: string; 
  status: string; 
}