import { Item } from '../types';

export async function addItemToShoppingCart(items: Item[]) {
  let response = await fetch('/api/shoppingCart', {
    method: 'POST',
    body: JSON.stringify({ items: items }),
  });
  let data = await response.json();
  return data;
}
