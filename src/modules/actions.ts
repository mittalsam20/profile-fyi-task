'use server';

import {
  clearCart,
  addProduct,
  addProductToCart,
  deleteProductFromCart,
  removeProductFromCart,
} from './mutations';

export async function addProductToCartAction(productId: any) {
  await addProductToCart(productId);
}

export async function removeProductFromCartAction(productId: any) {
  await removeProductFromCart(productId);
}

export async function deleteProductFromCartAction(productId: any) {
  await deleteProductFromCart(productId);
}

export async function clearCartAction(source: string) {
  await clearCart(source);
}

export async function addProductAction(productData: any) {
  await addProduct(productData);
}
