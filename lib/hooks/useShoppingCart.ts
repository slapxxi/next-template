import { Item } from '.prisma/client';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addItemToShoppingCart } from '../services/addItemToShoppingCart';
import { deleteItemsFromShoppingCart } from '../services/deleteItemsFromShoppingCart';
import { getShoppingCart } from '../services/getShoppingCart';
import { CartItem } from '../types';

interface ShoppingCart {
  count: number;
  status: any;
  items: CartItem[];
  addItem: (item: any) => void;
  deleteItem: (item: Item) => void;
}

export function useShoppingCart(): ShoppingCart {
  let queryClient = useQueryClient();
  let { status, data } = useQuery('shopping-cart', () => getShoppingCart(), {});
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
  let deleteMutation = useMutation(
    async (item: Item) => {
      return deleteItemsFromShoppingCart([item]);
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
  let addItem = (item: Item) => {
    mutation.mutate(item);
  };
  let deleteItem = (item: Item) => {
    deleteMutation.mutate(item);
  };

  return {
    status: matchStatus(status, mutation.status, deleteMutation.status),
    count,
    items,
    addItem,
    deleteItem,
  };
}

function matchStatus(status, addStatus, deleteStatus) {
  if (addStatus === 'loading' || deleteStatus === 'loading') {
    return 'loading';
  }
  return status;
}
