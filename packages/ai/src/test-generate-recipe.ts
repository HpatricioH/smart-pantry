import { generateRecipesFromPantryAndSave } from "./recipes/generateRecipesFromPantryAndSave";

async function main() {
  const pantrySnapshot = [
    { name: "Tomato", quantity: 3, unit: "piece" },
    { name: "Pasta", quantity: 200, unit: "g" },
    { name: "Olive Oil", quantity: 50, unit: "ml" },
  ];

  const constraints = {
    maxRecipes: 1,
  };

  const userId = "test-user-123";

  const result = await generateRecipesFromPantryAndSave({
    userId,
    pantrySnapshot,
    constraints,
  });

  console.log("AI returned recipes:");
  console.log(result);
}

main().catch((err) => {
  console.error("Error:", err);
});
