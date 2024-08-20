import { and, eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

import { db } from '@/db';
import { getSession } from '@/lib/auth';
import { cartItem, product } from '@/db/schema';

export async function addProductToCart(productId: any) {
  const session = await getSession();
  if (!session) throw new Error('User not authenticated');
  const userId = session.user.id;

  const [existingCartItem] = await db
    .select()
    .from(cartItem)
    .where(and(eq(cartItem.userId, userId), eq(cartItem.productId, productId)))
    .limit(1);

  const existingQuantity = existingCartItem?.quantity;
  console.log(existingQuantity);

  if (existingQuantity) {
    await db
      .update(cartItem)
      .set({ quantity: existingQuantity + 1 })
      .where(
        and(eq(cartItem.userId, userId), eq(cartItem.productId, productId)),
      );
  } else {
    await db.insert(cartItem).values({
      userId,
      productId,
      quantity: 1,
    });
  }
}

export async function removeProductFromCart(productId: any) {
  const session = await getSession();
  if (!session) throw new Error('User not authenticated');
  const userId = session.user.id;

  const [existingCartItem] = await db
    .select({ quantity: cartItem.quantity })
    .from(cartItem)
    .where(and(eq(cartItem.userId, userId), eq(cartItem.productId, productId)))
    .limit(1);

  if (existingCartItem) {
    const { quantity } = existingCartItem;
    switch (quantity) {
      case 0:
        throw new Error('Item not found in cart!');
      case 1: {
        await db
          .delete(cartItem)
          .where(
            and(eq(cartItem.userId, userId), eq(cartItem.productId, productId)),
          );
        break;
      }
      default:
        await db
          .update(cartItem)
          .set({ quantity: quantity - 1 })
          .where(
            and(eq(cartItem.userId, userId), eq(cartItem.productId, productId)),
          );
    }
  }
}

export async function deleteProductFromCart(productId: any) {
  const session = await getSession();
  if (!session) {
    throw new Error('User not authenticated');
  }
  const userId = session.user.id;

  const [existingCartItem] = await db
    .select({ quantity: cartItem.quantity })
    .from(cartItem)
    .where(and(eq(cartItem.userId, userId), eq(cartItem.productId, productId)));

  if (existingCartItem?.quantity <= 0)
    throw new Error('Item not found in cart!');

  await db
    .delete(cartItem)
    .where(and(eq(cartItem.userId, userId), eq(cartItem.productId, productId)));
}

export async function clearCart(source: any) {
  const session = await getSession();
  if (!session) throw new Error('User not authenticated');
  const userId = session.user.id;

  await db.delete(cartItem).where(eq(cartItem.userId, userId));
  if (source === 'CHECKOUT') redirect('/order-successful');
}

export async function addProduct(productData: any) {
  const inserted = await db.insert(product).values(productData).returning();
  return inserted[0];
}
