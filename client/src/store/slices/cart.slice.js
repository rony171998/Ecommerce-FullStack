import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            return action.payload;
        },
        
    },
});

export const { setCart } = cartSlice.actions;

const getConfig = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const getCarts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("/cart", getConfig())
        .then((res) => dispatch(setCart(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addProductsToCart = (id,quantitiesproduct) => (dispatch) => {
    const data = {productId : id , quantity : quantitiesproduct}
    dispatch(setIsLoading(true));
    return axios.post("/cart/add-product" , data, getConfig())
        .then((res) => dispatch(alert(res.data.status)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const pachProductsToCart = (id,quantity) => (dispatch) => {
    const data = {id, newQuantity: quantity}
    dispatch(setIsLoading(true));
    return axios.patch("/cart/update-cart" , data, getConfig())
        .then((res) => dispatch(alert(res.data.status)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const DelProductsToCart = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`/cart/${id}` , getConfig())
        .then((res) => dispatch(alert(res.data.status)))
        .finally(() => dispatch(setIsLoading(false)));
}


export default cartSlice.reducer;
