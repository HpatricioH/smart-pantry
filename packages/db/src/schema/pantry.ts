import { createTable } from '../utils/createTable'
import { 
  text, 
  integer, 
} from 'drizzle-orm/sqlite-core'

export const pantry = createTable('pantry', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(), // Clerk userId
  name: text('name').notNull(),
  quantity: text('quantity').default("1"),
  unit: integer('unit').default(1),
  image: text('image'),
  category: text("category"),
  expiresInDays: integer('expiresInDays'),
  lowStock: integer("lowStock", { mode: "boolean" }).default(true),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
})
