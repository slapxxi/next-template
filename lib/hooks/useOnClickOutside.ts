import { MutableRefObject, useEffect } from 'react';

export function useOnClickOutside(
  ref: MutableRefObject<HTMLElement>,
  handler: (event: React.MouseEvent<HTMLElement>) => void,
) {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    }
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);
}
