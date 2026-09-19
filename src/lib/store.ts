import { create } from 'zustand';

export interface CartItem {
  id: number;
  name: string;
  price: string;
  src: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  get totalItems(): number;
  get totalPrice(): number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    });
  },
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
    })),
  clearCart: () => set({ items: [] }),
  get totalItems() {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  get totalPrice() {
    return get().items.reduce((total, item) => {
      // Convert '$1,200' back to number
      const priceNum = parseFloat(item.price.replace(/[$,]/g, ''));
      return total + priceNum * item.quantity;
    }, 0);
  },
}));
