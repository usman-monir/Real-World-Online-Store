import { createSlice } from "@reduxjs/toolkit";
import { updateCart} from "../../utils/cartUtills";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {
    cartItems: [], shippingDetails: {}, paymentMethod: 'PayPal'
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            const existItem = state.cartItems.find(x => x._id === item._id);
            if ( existItem )
                state.cartItems = state.cartItems.map(x => x._id === item._id ? item : x);
            else
                state.cartItems = [ ...state.cartItems, item ];

            return updateCart(state);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload)
            return updateCart(state);
        },
        saveShippingDetails: (state, action) => {
            state.shippingDetails = action.payload;
            return updateCart(state);
        },
        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
            return updateCart(state);
        }
    },
})

export const { addToCart, removeFromCart, saveShippingDetails, savePaymentMethod } = cartSlice.actions;
export default cartSlice.reducer;
