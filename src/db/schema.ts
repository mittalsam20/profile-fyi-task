import { sql } from 'drizzle-orm';
import {
  text,
  uuid,
  integer,
  pgTable,
  decimal,
  primaryKey,
} from 'drizzle-orm/pg-core';
import { AdapterAccount } from 'next-auth/adapters';

export const users = pgTable('user', {
  id: text('id').notNull().primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  image: text('image'),
});

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const product = pgTable('product', {
  id: uuid('productId')
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text('name').notNull(),
  image: text('image').notNull(),
  description: text('description').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
});

export const cartItem = pgTable('cartItem', {
  id: uuid('cartId')
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  userId: uuid('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  productId: uuid('productId')
    .notNull()
    .references(() => product.id, { onDelete: 'cascade' }),
  quantity: integer('quantity').notNull(),
});
