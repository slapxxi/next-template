export async function getChats(): Promise<any> {
  let response = await fetch(`/api/chats`);
  let json = await response.json();
  return json;
}
