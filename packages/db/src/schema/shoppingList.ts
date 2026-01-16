import { createTable } from "../utils/createTable";
import { 
  text, 
  integer,
} from 'drizzle-orm/sqlite-core';

export const shoppingList = createTable('shopping_list', {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text('user_id').notNull(), // Clerk userId
  name: text('name').notNull(),
  category: text("category"),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
})