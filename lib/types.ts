import { defaultTheme } from './styles/theme';

export interface User {
  id: string;
  name: string;
  image: string;
  gender: 'male' | 'female';
  createdAt: string;
}

export type Theme = typeof defaultTheme & { data?: any };
