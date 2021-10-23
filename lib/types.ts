import { defaultTheme } from './styles/theme';

export interface User {
  id: string;
  name: string;
  image: string;
  gender: 'male' | 'female';
  about: string;
  createdAt: string;
  country: string;
  age: number;
  isOnline: boolean;
  bid: number;
  height: number;
  weight: number;
  eyeColor: string;
  hairColor: string;
}

export type Theme = typeof defaultTheme & { data?: any };
