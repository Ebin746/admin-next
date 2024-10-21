import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import productSlice from "./features/productSlice";
import loadingSlice from "./features/loadingSlice";
console.log(loadingSlice,"for checking "); // Ch
export const store = configureStore({
    reducer: {
        cart: cartSlice,       // key is the slice name, value is the reducer
        loading: loadingSlice, // key is the slice name, value is the reducer
        product: productSlice, // key is the slice name, value is the reducer
    },
    devTools: process.env.production !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
