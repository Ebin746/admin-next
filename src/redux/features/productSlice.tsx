import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Iproduct } from "@/app/admin/dashboard/page";
// Define the Iproduct interface


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
