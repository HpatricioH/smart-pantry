import { createTable } from "../utils/createTable";
import {
  text, 
  integer,
  real
} from 'drizzle-orm/sqlite-core'
import { relations, sql } from "drizzle-orm";

/**
 * Recipes Table
 */
export const recipes = createTable('recipes', {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  sourceType: text("source_type").notNull().default("ai_generated"), // ai_generated | manual | imported
  status: text("status").notNull().default("draft"), // draft | active | archived
  totalTime: text("total_time"),
  prepTime: text("prep_time"),
  cookTime: text("cook_time"),
  servings: integer("servings").notNull(),
  difficulty: text("difficulty"), // easy | medium | hard
  image: text("image"),
  liked: integer("liked", {mode: "boolean" }).notNull().default(false),
  primaryCategoryId: text("primary_category_id"),
  createdAt: integer("created_at")
    .notNull()
    .default(sql`(strftime('%s','now'))`),
  updatedAt: integer("updated_at")
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
  calories: integer("calories"),
})

/**
 * Recipe Ingredients
 */
export const recipeIngredients = createTable('recipe_ingredients', {
  id: text("id").primaryKey(),
  recipeId: text("recipe_id").notNull(),
  pantryProductId: text("pantry_product_id"),
  name: text("name").notNull(),
  quantity: real("quantity"),
  unit: text("unit"),
  optional: integer("option", { mode: "boolean" }).notNull().default(false),
  note: text("note"),
})

/**
 * Recipe Steps
 */
export const recipeSteps = createTable('recipe_steps', {
  id: text("id").primaryKey(),
  recipeId: text("recipe_id").notNull(),
  order: integer("order_index"),
  text: text("text").notNull(),
  timerSeconds: integer("timer_seconds"),
})

/**
 * Tags
 */
export const recipeTags = createTable("recipe_tags", {
  id: text("id").primaryKey(),
  name: text("name").notNull().unique(),
})


/**
 * Tags on recipes (many-to-many)
 */
export const recipeTagsOnRecipes = createTable("recipe_tags_on_recipes", {
  recipeId: text("recipe_id").notNull(),
  tagId: text("tag_id").notNull(),
})


/**
 * User Recipe Preferences
 */
export const userRecipePreferences = createTable("user_recipe_preferences", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  recipeId: text("recipe_id").notNull(),
  liked: integer("liked", { mode: "boolean"}),
  rating: integer("rating"),
  saved: integer("saved", { mode: "boolean" }).notNull().default(false),
  notes: text("notes").notNull(),
})

/**
 * AI Generation Logs
 */

export const aiRecipeGenerationLogs = createTable("ai_recipe_generation_logs", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(), 
  requestType: text("request_type").notNull(),
  inputSnapshot: text("input_snapshot").notNull(),
  rawResponse: text("raw_response"),
  parsedRecipeId: text("parsed_recipe_id"),
  error: text("error"),
  createdAt: integer("created_at") 
    .notNull()
    .default(sql`(strftime('%s','now'))`),
})


// Relations
// export const recipesRelations = relations(recipes, ({ many }) => ({
//   ingredients: many(recipeIngredients),
//   instructions: many(recipeSteps),
//   recipeTags: many(recipeTags),
// }));

// export const recipeIngredientsRelations = relations(recipeIngredients, ({ one }) => ({
//   recipe: one(recipes, {
//     fields: [recipeIngredients.recipeId],
//     references: [recipes.id],
//   }),
// }));

// export const recipeInstructionsRelations = relations(recipeSteps, ({ one }) => ({
//   recipe: one(recipes, {
//     fields: [recipeSteps.recipeId],
//     references: [recipes.id],
//   }),
// }));