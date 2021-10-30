import { User } from '../types';

export async function getAuthUser(): Promise<User> {
  let response = await fetch(`/api/user/auth`);
  let json = await response.json();
  return json;
}
