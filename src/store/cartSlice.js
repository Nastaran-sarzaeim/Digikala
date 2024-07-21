import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: {},
    totalItems: 0
};

const cartSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            if (state.cart[product.id]) {
                state.cart[product.id].quantity += 1;
                state.totalItems += product.quantity
            } else {
                state.cart[product.id] = { ...product, quantity: 1 };
                state.totalItems++

            }
        },
        removeTheCart(state, action) {
            const product = action.payload;
            if (state.cart[product]) {
                delete state.cart[product];
            }
        },
        increment: (state, action) => {
            const product = action.payload;
            if (state.cart[product]) {
                state.cart[product].quantity += 1;
            }
        },
        decrement: (state, action) => {
            const product = action.payload;
            if (state.cart[product] && state.cart[product].quantity > 1) {
                state.cart[product].quantity -= 1;
            }
        },
    },
});

export const selectCartProducts = (state) => { return state.cart.cart };
export const {
    addToCart,
    increment,
    decrement,
    removeTheCart,
} = cartSlice.actions;

export default cartSlice.reducer;