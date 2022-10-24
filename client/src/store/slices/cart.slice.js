import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";
import { swal } from '../../components';

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

export const addProductsToCart = (productId,quantitiesproduct) => (dispatch) => {
    const data = {productId  , quantity : quantitiesproduct}
    dispatch(setIsLoading(true));
    return axios.post("/cart/add-product" , data, getConfig())
    .then((res) => dispatch(swal( "success" , res.statusText , "success") ))
    .catch((err) => dispatch(console.log(err) , swal("Error", err.response.data.message, "error")))
    .finally(() => dispatch(setIsLoading(false)))
    .finally(() => dispatch(getCarts));
}
export const pachProductsToCart = (productId,quantity) => (dispatch) => {
    const data = {productId, newQuantity: quantity}
    dispatch(setIsLoading(true));
    return axios.patch("/cart/update-cart" , data, getConfig())
    .then((res) => dispatch(swal( "success" , res.statusText , "success") ))
    .catch((err) => dispatch(console.log(err) , swal("Error", err.response.data.message, "error")))
    .finally(() => dispatch(setIsLoading(false)))
    .finally(() => dispatch(getCarts));;
}
export const DelProductsToCart = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`/cart/${id}` , getConfig())
    .then((res) => dispatch(swal( "success" , res.statusText , "success") ))
    .catch((err) => dispatch(console.log(err) , swal("Error", err.response.data.message, "error")))
    .finally(() => dispatch(setIsLoading(false)))
    .finally(() => dispatch(getCarts));;
}

export default cartSlice.reducer;
