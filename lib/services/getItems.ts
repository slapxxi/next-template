export async function getItems() {
  let response = await fetch('/api/items');
  let data = await response.json();
  return data;
}
