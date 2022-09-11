import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const purchasesSlice = createSlice({
    name: "purcahses",
    initialState: [],
    reducers: {
        setPurchases: (state, action) => {
            return action.payload;
        },
        
    },
});

export const { setPurchases } = purchasesSlice.actions;

const getConfig = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const postCart = (data) => (dispatch) => {   
    dispatch(setIsLoading(true));
    return axios.post("/cart/purchases", data, getConfig())
        .then((res) => dispatch(alert(res.data.status)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getPurchases = () => (dispatch) => {   
    dispatch(setIsLoading(true));
    return axios.get("/cart/purchases", getConfig())
        .then((res) => dispatch(setPurchases(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export default purchasesSlice.reducer;
