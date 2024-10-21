import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Iproduct interface
interface Iproduct {
    _id: string;
    imgSrc: string;
    fileKey: string;
    price: string;  // Keep as string or change to number if needed
    name: string;
    category: string;
}

// Define the initial state of the product slice
const initialState: Iproduct = {
    _id: "",
    imgSrc: "",
    fileKey: "",
    price: "",  // You can change this to 0 if price is a number
    name: "",
    category: ""
};

// Create the product slice
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<Iproduct>) => {
            return action.payload;  // Set the state to the action payload
        },
    },
});

// Export the action creator and reducer
export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
