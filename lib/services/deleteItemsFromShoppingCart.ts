import { Item } from '.prisma/client';

export async function deleteItemsFromShoppingCart(items: Item[]) {
  let response = await fetch('/api/shoppingCart', {
    method: 'DELETE',
    body: JSON.stringify({ items: items }),
  });
  let data = await response.json();
  return data;
}
