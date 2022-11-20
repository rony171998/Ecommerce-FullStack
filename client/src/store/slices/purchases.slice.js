import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";
import { swal } from '../../components';
import { getCarts } from "./cart.slice";

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
    return axios.post("/purchases", data, getConfig())
        .then((res) => dispatch(swal( "success" , res.statusText , "success") ))
        .catch((err) => dispatch(console.log(err) , swal("Error", err.response.data.message, "error")))
        .finally(() => dispatch(setIsLoading(false)))
        .finally(() => dispatch(getCarts));
}

export const getPurchases = () => (dispatch) => {   
    dispatch(setIsLoading(true));
    return axios.get("/purchases", getConfig())
        .then((res) => dispatch(setPurchases(res.data.purchases)))
        .finally(() => dispatch(setIsLoading(false)));
}

export default purchasesSlice.reducer;
