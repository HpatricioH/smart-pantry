import { createTable } from '@db/utils/createTable'
import { 
  text, 
  integer, 
} from 'drizzle-orm/sqlite-core'

export const categories = createTable('categories', {
  id: text('id').primaryKey(),
  userId: text('user_id'),
  name: text('name').notNull(),
  image: text('image'),
  sortOrder: integer("sort_order").default(0),
  // soft flags
  isActive: integer("is_active", { mode: "boolean" }).default(true),
  createdAt: integer("created_at", { mode: "timestamp" }),
  updatedAt: integer("updated_at", { mode: "timestamp" }),
})