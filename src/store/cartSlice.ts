import {CartItem, Product} from "./types";

import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

export interface CartState {
    cartItems: CartItem[],
}

const initialState: CartState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            const item = state.cartItems.find(item => item.product._uid === action.payload._uid);
            if (item) {
                item.qty++;
            } else {
                state.cartItems.push({product: action.payload, qty: 1});
            }
        },
        removeFromCart: (state, action: PayloadAction<any>) => {
            const item = state.cartItems.find(item => item.product._uid === action.payload._uid);
            if (item) {
                item.qty--;
                if (item.qty === 0) {
                    state.cartItems = state.cartItems.filter(item => item.product._uid !== action.payload._uid);
                }
            }
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            const item = state.cartItems.find(item => item.product._uid === action.payload);
            if (item) {
                item.qty = 0;
                state.cartItems = state.cartItems.filter(item => item.product._uid !== action.payload);
            }
        },
        emptyCart(state, action: PayloadAction<Product>) {
            state.cartItems = [];
        },
    },
});

export const cartItems = (state: RootState) => state.cart.cartItems;
export const cartState = (state: RootState) => state.cart;
export const totalCartItemSelector = createSelector([cartItems], (cartItems: CartItem[]) => cartItems.reduce((total: number, currentValue: CartItem) => (total += currentValue.qty), 0));
export const totalCartPriceSelector = createSelector([cartItems], (cartItems: CartItem[]) => cartItems.reduce((total: number, currentValue: CartItem) => (total += (currentValue.qty * currentValue.product.price)), 0));

export const productQtyInCartSelector = createSelector(
    [cartItems, (cartItems, productId: string) => productId],
    (cartItems, productId) => cartItems.find(item => item.product.id === productId)?.qty ?? 0
);

export const {addToCart, removeFromCart, deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;



