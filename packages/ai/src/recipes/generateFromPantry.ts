import { AiRecipeListSchema, type AiRecipeList } from "./schema"
import { callLLMJson } from "src/clients"
import type { 
  GenerateFromPantryInput, 
  } from "./types"

export async function generateRecipesFromPantry(input: GenerateFromPantryInput,) {
  const { pantrySnapshot, constraints = {}} = input 

  const pantryJson  = JSON.stringify(pantrySnapshot, null, 2);
  const constraintsJson = JSON.stringify(constraints, null, 2);

  const systemPrompt = `
  You are a helpful cooking assistant. 
  You MUST return valid JSON matching the schema. 
  `;
  
  const userPrompt = `
  Here is the user's pantry (JSON):

  ${pantryJson}

  They have these recipe constraints (JSON):

  ${constraintsJson}

  Generate exactly 1 simple recipe that: 
  - Uses as many pantry items as possible
  - Has at least 2 ingredients 
  - Has at least 2 steps 

  Return ONLY a JSON object with the shape: 
  {
    "recipes": [
      {
        "title": "Simple Tomato Pasta",
        "description": "Short description or null",
        "servings": 2,
        "totalTimeMinutes": 20,
        "difficulty": "easy",
        "tags": ["pasta", "quick"],
        "ingredients": [
          {
            "name": "Tomato",
            "quantity": 2,
            "unit": "piece",
            "optional": false,
            "note": null
          }
        ],
        "steps": [
          {
            "order": 1,
            "text": "Boil the pasta according to package instructions.",
            "timerSeconds": 600
          }
        ]
      }
    ]
  }
  Important rules:
  - The top-level object MUST have a "recipes" array. 
  - Each recipe MUST have a "title" field (do NOT use "name" at the recipe level). 
  - Each "steps" item MUST be an object with "order", "text", and optional "timerSeconds". 
  - Do not return any extra fields. 
  - Do not wrap the JSON in backticks or markdown. 
  `;

  const result = await callLLMJson({
    schema: AiRecipeListSchema,
    systemPrompt,
    userPrompt,
  });

  return result
}

