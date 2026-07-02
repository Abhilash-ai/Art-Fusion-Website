import { create } from 'zustand';

export interface WishlistItem {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface WishlistState {
  items: WishlistItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleItem: (item: WishlistItem) => void;
  isInWishlist: (id: number) => boolean;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  toggleItem: (item) => {
    const { items } = get();
    const exists = items.some(i => i.id === item.id);
    
    if (exists) {
      set({ items: items.filter(i => i.id !== item.id) });
    } else {
      set({ items: [...items, item] });
    }
  },
  isInWishlist: (id) => {
    return get().items.some(i => i.id === id);
  }
}));
