import { useEffect } from 'react';
import create from 'zustand';

interface State {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

let useStore = create<State>((set, get) => {
  return {
    isOpen: false,
    toggle: () => set({ isOpen: !get().isOpen }),
    close: () => set({ isOpen: false }),
  };
});

export function useLightbox() {
  let lightboxStore = useStore();

  useEffect(() => {
    return () => lightboxStore.close();
  }, []);

  return lightboxStore;
}
