import { Item } from '.prisma/client';
import { useQuery } from 'react-query';
import { getItems } from '../services/getItems';

interface StoreItems {
  status: 'idle' | 'error' | 'success' | 'loading';
  items: Item[];
}

export function useStoreItems(): StoreItems {
  let { status, data } = useQuery('items', () => getItems());
  let items = status === 'success' ? data : [];
  return { items, status };
}
