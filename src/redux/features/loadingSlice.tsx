import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// Define the initial state of the loading slice
const initialState: boolean = false;

export const loadingSlice = createSlice({
    name: "loading",  // Changed to a simpler name
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            return action.payload;  // Set the state to the action payload
        },
    },
});

// Export the action creator and reducer
export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
