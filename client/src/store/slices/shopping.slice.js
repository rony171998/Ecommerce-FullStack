import { createSlice } from "@reduxjs/toolkit";

export const shoppingSlice = createSlice({
    name: "shopping",
    initialState: {
        reducer: {
            setShopping: (state, action) => {
                return action.payload;
            }
        }
    }
});

export const { setShopping } = shoppingSlice.actions;