import { create } from 'zustand'
export const useStore = create((set) => ({
    products: [],
    cartProducts: [],
    setProducts: (products) => {
        set({ products: products })
    },
    setCartProducts: (cartProduct) => {
        set((state) => ({
            cartProducts: [...state.cartProducts, cartProduct]
        }))
    },
    updateCartProducts: (cartProducts) => {
        set({cartProducts:cartProducts})
    }
}))