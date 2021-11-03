import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addItemToShoppingCart } from '../services/addItemToShoppingCart';
import { getShoppingCart } from '../services/getShoppingCart';
import { Item } from '../types';

interface ShoppingCart {
  count: number;
  items: any[];
  addItem: (item: Item) => void;
}

export function useShoppingCart(): ShoppingCart {
  let queryClient = useQueryClient();
  let { status, data } = useQuery('shopping-cart', () => getShoppingCart());
  let mutation = useMutation(
    async (item: Item) => {
      return addItemToShoppingCart([item]);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('shopping-cart');
      },
    },
  );
  let count = status === 'loading' ? 0 : data.items.length;
  let items = status === 'loading' ? [] : data.items;
  let addItem = (item: Item) => {
    mutation.mutate(item);
  };
  return { count, items, addItem };
}
