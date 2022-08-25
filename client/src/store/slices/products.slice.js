import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost:4000/api/v1';
} else {
    axios.defaults.baseURL = 'https://ecommerce-express.azurewebsites.net/api/v1';  
}


export const productsSlice = createSlice({
    
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            return action.payload
        }
    }
})
export const { setProducts  } = productsSlice.actions;

export const getProducts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    
    return axios.get(`/products`)
        .then(res =>dispatch(setProducts(res.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getMyProducts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    
    return axios.get(`/users/me` , getConfig())
        .then(res =>dispatch(setProducts(res.data.user)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addProductsToCart = (id,quantity) => (dispatch) => {
    const data = {id, quantity}
    dispatch(setIsLoading(true));
    return axios.post("/cart" , data, getConfig())
        .then((res) => dispatch(alert(res.data.status)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const pachProductsToCart = (id,quantity) => (dispatch) => {
    const data = {id, newQuantity: quantity}
    dispatch(setIsLoading(true));
    return axios.patch("/cart" , data, getConfig())
        .then((res) => dispatch(alert(res.data.status)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const DelProductsToCart = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`/cart/${id}` , getConfig())
        .then((res) => dispatch(alert(res.data.status)))
        .finally(() => dispatch(setIsLoading(false)));
}


export const filterCategory = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`/products`)
        .then((res) => {
            const productsSearched = res.data.data.products.filter(
                (productsItem) => productsItem.category.id === Number(id)
            );
            dispatch(setProducts(productsSearched));
        })
        .finally(() => dispatch(setIsLoading(false)));
        
}

export const filterProductsByName = (name) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("/products")
        .then((res) => {
        const productsSearched = res.data.data.products.filter(
            (productsItem) => productsItem.title.toLowerCase().includes(name)
        );
        dispatch(setProducts(productsSearched));
        })
        .finally(() => dispatch(setIsLoading(false)));      
}

export const filterProductsByPrices = (priceMin , priceMax) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("/products")
        .then((res) => {
        const productsSearched = res.data.data.products.filter(
            (productsItem) => productsItem.price >= priceMin  && productsItem.price <= priceMax
        );
        dispatch(setProducts(productsSearched));
        })
        .finally(() => dispatch(setIsLoading(false)));      
}

const getConfig = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});



export const getCarts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("/cart", getConfig())
        .then((res) => dispatch(setProducts(res.data.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const postCart = (data) => (dispatch) => {
    
    dispatch(setIsLoading(true));
    return axios.post("/purchase", data, getConfig())
        .then((res) => dispatch(alert(res.data.status)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const  postProduct =async (formData) =>  (dispatch) => {   
    dispatch(setIsLoading(true));
    return axios.post ("/products", formData, getConfig())
        .then((res) => dispatch(alert(res.data.status)))
        .catch((err) => dispatch(console.log(err)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const deleteProduct = (id) => async (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`/products/${id}`, getConfig())
        .then((res) => dispatch(alert(res.data.status)))
        .catch((err) => dispatch(console.log(err)))
        .finally(() => dispatch(setIsLoading(false)))
        .finally(() => dispatch(getMyProducts()));
}


export default productsSlice.reducer;