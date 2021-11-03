export async function getChat(chatId: string): Promise<any> {
  let response = await fetch(`/api/chats/${chatId}`);
  let json = await response.json();
  return json;
}
