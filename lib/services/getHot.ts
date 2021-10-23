import { User } from '../types';

const URL = typeof window !== 'undefined' ? '' : process.env.NEXTAUTH_URL;

export async function getHot(): Promise<User[]> {
  let response = await fetch(`${URL}/api/hot`);
  let json = await response.json();
  return json;
}
