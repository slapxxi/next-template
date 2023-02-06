import { useEffect } from 'react';

export function useNoScroll(flag: boolean) {
  useEffect(() => {
    if (flag) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [flag]);
}
