import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addItemToShoppingCart } from '../services/addItemToShoppingCart';
import { getShoppingCart } from '../services/getShoppingCart';
import { CartItem } from '../types';

interface ShoppingCart {
  count: number;
  items: CartItem[];
  addItem: (item: any) => void;
}

export function useShoppingCart(): ShoppingCart {
  let queryClient = useQueryClient();
  let { status, data } = useQuery('shopping-cart', () => getShoppingCart());
  let mutation = useMutation(
    async (item: any) => {
      return addItemToShoppingCart([item]);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('shopping-cart');
      },
    },
  );
  let count =
    status === 'loading' ? 0 : data.items.reduce((prev, current) => prev + (current.count || 1), 0);
  let items = status === 'loading' ? [] : data.items;
  let addItem = (item: any) => {
    mutation.mutate(item);
  };
  return { count, items, addItem };
}
