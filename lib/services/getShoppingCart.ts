export async function getShoppingCart() {
  let response = await fetch('/api/shoppingCart');
  let data = await response.json();
  return data;
}
