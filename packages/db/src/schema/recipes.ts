import { createTable } from "../utils/createTable";
import {
  text, 
  integer,
} from 'drizzle-orm/sqlite-core'


export const recipes = createTable('recipes', {
  id: text("id").primaryKey(),
  userId: text("user_id"),
  title: text("title"),
  description: text("description"),
  image: text("image"),
  prepTime: text("prep_time"),
  cookTime: text("cook_time"),
  totalTime: text("total_time"),
  servings: integer("servings").notNull(),
  liked: integer("liked", {mode: "boolean" }).notNull().default(false),
  difficulty: text("difficulty"),
  calories: integer("calories"),
})

export const recipeIngredients = createTable('recipe_ingredients', {
  id: text("id").primaryKey(),
  recipeId: text("recipe_id").notNull(),
  line: text("line").notNull(),
  order: integer("order").default(0)
})

export const recipeInstructions = createTable('recipe_instructions', {
  id: text("id").primaryKey(),
  recipeId: text("recipe_id").notNull(),
  step: text("step").notNull(),
  order: integer("order").default(0)
})

export const tags = createTable("tags", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull(),
  label: text("label").notNull(),
})

export const recipeTags = createTable("recipe_tags", {
  recipeId: text("recipe_id").notNull(),
  tagId: text("tag_id").notNull(),
})