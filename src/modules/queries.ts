import { eq, sql } from 'drizzle-orm';

import { db } from '@/db';
import { getSession } from '@/lib/auth';
import { cartItem, product } from '@/db/schema';

export async function getAllProductsQuery() {
  //   const where = search ? like(room.tags, `%${search}%`) : undefined;
  const products = await db.query.product.findMany({});
  return products;
}

export async function getUserCartItemsQuery() {
  const session = await getSession();
  if (!session) throw new Error('User not authenticated');
  const userId = session.user.id;
  const cartItems = await db
    .select({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: cartItem.quantity,
      image: product.image,
    })
    .from(cartItem)
    .where(eq(cartItem.userId, userId))
    .innerJoin(product, eq(cartItem.productId, product.id));

  return cartItems;
}
