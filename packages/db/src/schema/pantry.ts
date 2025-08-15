import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const pantry = sqliteTable('pantry', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(), // Clerk userId
  name: text('name').notNull(),
  quantity: integer('quantity').default(1),
  image: text('image'),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
})