import { createTable } from "../utils/createTable";
import {
  text, 
  integer,
} from 'drizzle-orm/sqlite-core'


export const recipes = createTable('recipes', {
  id: text("id").primaryKey(),
  userId: text("user_id"),
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