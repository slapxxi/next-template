import { Item, ShoppingCartItem } from '.prisma/client';
import { defaultTheme } from './styles/theme';

export interface CartItem extends ShoppingCartItem {
  item: Item;
}

export type Theme = typeof defaultTheme & { data?: any };
