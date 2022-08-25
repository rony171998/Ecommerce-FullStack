import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        reducer: {
            setCart: (state, action) => {
                return action.payload;
            }
        }
    }
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;