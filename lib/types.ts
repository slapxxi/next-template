import { defaultTheme } from './styles/theme';

export interface Item {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  prevPrice?: string;
}

export type Theme = typeof defaultTheme & { data?: any };
