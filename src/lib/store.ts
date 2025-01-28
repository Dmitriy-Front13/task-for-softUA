import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product } from "./api"

type CartItem = Product & {
  quantity: number
}

type CartStore = {
  cart: CartItem[]
  open: boolean
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  toggleOpen: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      open: false,
      toggleOpen: () => set((state) => ({ open: !state.open })),
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id)
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
              ),
            }
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] }
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
    }),
    {
      name: "cart-storage",
    },
  ),
)

