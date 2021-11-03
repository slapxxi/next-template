import { useQuery } from 'react-query';
import { getFavorites } from '../services/getFavorites';

interface FavoritesState {
  count: number;
}

export function useFavorites(): FavoritesState {
  let { data, status } = useQuery('favorites', () => getFavorites());
  let count = status === 'success' ? data.items.length : 0;
  return { count };
}
