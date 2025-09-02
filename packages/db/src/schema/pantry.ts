import { createTable } from '../utils/createTable'
import { 
  text, 
  integer, 
} from 'drizzle-orm/sqlite-core'

export const pantry = createTable('pantry', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(), // Clerk userId
  name: text('name').notNull(),
  quantity: integer('quantity').default(1),
  image: text('image'),
  category: text("category"),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
})
