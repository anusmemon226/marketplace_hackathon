import { create } from 'zustand'

// type Store = {
//     products: [],
//     cartProducts: {}[],
//     setProducts: (products: any) => void,
//     setCartProducts: (cartProduct: any) => void
// }

export const useStore = create((set) => ({
    products: [],
    cartProducts: [],
    setProducts: (products) => {
        set({ products: products })
    },
    setCartProducts: (cartProduct) => {
        set((state) => ({
            cartProducts: [...state.cartProducts, ...cartProduct]
        }))
    } 
}))