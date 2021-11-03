export async function getFavorites() {
  let response = await fetch('/api/favorites');
  let data = await response.json();
  return data;
}
