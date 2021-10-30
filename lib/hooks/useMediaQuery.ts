import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return false;

  let mediaQuery = window.matchMedia(query);
  let [match, setMatch] = useState(!!mediaQuery.matches);

  useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return match;
}
