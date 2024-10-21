import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the Iproduct interface
interface Iproduct {
    id: string;
    title: string;
    img: string;
    price: number;
    quantity: number; // Corrected spelling here
}

// Define the initial state as an empty array of products
const initialState: Iproduct[] = [];

// Create the cart slice
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Iproduct>) => {
            const productStateIndex = state.findIndex((pro) => pro.id === action.payload.id);
            
            if (productStateIndex === -1) {
                // If the product doesn't exist in the cart, add it
                state.push(action.payload);
            } else {
                // If the product exists, increment its quantity
                state[productStateIndex].quantity += 1;
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            // Return a new state array excluding the product with the given id
            return state.filter((item) => item.id !== id);
        }
    }
});

// Export the action creators and reducer
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
