import { db } from '@/db';

export async function getProducts() {
  //   const where = search ? like(room.tags, `%${search}%`) : undefined;
  const products = await db.query.product.findMany({});
  return products;
}
