import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem, PizzaSize, Topping } from '../types';
import { PIZZERIA_INFO } from '../data/menu';

interface CartContextType {
  items: CartItem[];
  addItem: (menuItem: MenuItem, size?: PizzaSize, extraToppings?: Topping[], notes?: string, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItemsCount: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isCheckoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;
  isReservationOpen: boolean;
  openReservation: () => void;
  closeReservation: () => void;
  customizingItem: MenuItem | null;
  openCustomizer: (item: MenuItem) => void;
  closeCustomizer: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bella_napoli_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('bella_napoli_cart', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addItem = (
    menuItem: MenuItem,
    size?: PizzaSize,
    extraToppings: Topping[] = [],
    notes: string = '',
    quantity: number = 1
  ) => {
    let basePrice = menuItem.price;
    if (size === 'Familiar (38cm)' && menuItem.priceFamiliar) {
      basePrice = menuItem.priceFamiliar;
    }
    const toppingsPrice = extraToppings.reduce((acc, t) => acc + t.price, 0);
    const unitPrice = basePrice + toppingsPrice;
    const totalPrice = unitPrice * quantity;

    // Check if duplicate item exists with same size & toppings
    const toppingsKey = extraToppings.map(t => t.id).sort().join('-');
    const existingIndex = items.findIndex(
      item =>
        item.menuItem.id === menuItem.id &&
        item.size === size &&
        item.extraToppings.map(t => t.id).sort().join('-') === toppingsKey &&
        (item.notes || '') === notes
    );

    if (existingIndex > -1) {
      setItems(prev => {
        const next = [...prev];
        const existing = next[existingIndex];
        const newQty = existing.quantity + quantity;
        next[existingIndex] = {
          ...existing,
          quantity: newQty,
          totalPrice: existing.unitPrice * newQty
        };
        return next;
      });
    } else {
      const newItem: CartItem = {
        id: `${menuItem.id}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        menuItem,
        size,
        extraToppings,
        notes,
        quantity,
        unitPrice,
        totalPrice
      };
      setItems(prev => [...prev, newItem]);
    }
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev => {
      return prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            return {
              ...item,
              quantity: newQty,
              totalPrice: item.unitPrice * newQty
            };
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const deliveryFee = subtotal >= PIZZERIA_INFO.freeDeliveryThreshold || subtotal === 0 ? 0 : PIZZERIA_INFO.deliveryFee;
  const total = subtotal + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItemsCount,
        subtotal,
        deliveryFee,
        total,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        isCheckoutOpen,
        openCheckout: () => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        },
        closeCheckout: () => setIsCheckoutOpen(false),
        isReservationOpen,
        openReservation: () => setIsReservationOpen(true),
        closeReservation: () => setIsReservationOpen(false),
        customizingItem,
        openCustomizer: (item: MenuItem) => setCustomizingItem(item),
        closeCustomizer: () => setCustomizingItem(null)
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
