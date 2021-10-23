import { User } from '../types';

export async function getUser(userId: string): Promise<User> {
  let response = await fetch(`/api/user/${userId}`);
  let json = await response.json();
  return json;
}
