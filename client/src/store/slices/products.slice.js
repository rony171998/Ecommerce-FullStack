import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { swal } from '../../components';
import { setIsLoading } from './isLoading.slice';
import { getMyProducts } from './user.slice';

if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost:4000/api/v1';
    //axios.defaults.baseURL = 'https://ecommerce-express.azurewebsites.net/api/v1';
     
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
    },
    

})
export const { setProducts  } = productsSlice.actions;

export const getProducts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    
    return axios.get(`/products`)
        .then(res =>dispatch(setProducts(res.data.products)))
        .catch(err => console.log(err))
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

export const  postProduct = (formData) =>  (dispatch) => {   
    dispatch(setIsLoading(true));
    
    return axios.post ("/products", formData, getConfig())
        .then((res) => dispatch(swal( "success" , res.statusText , "success") ))
        .catch((err) => dispatch(console.log(err) , swal("Error", err.response.data.message, "error")))
        .finally(() => dispatch(setIsLoading(false)))
        .finally(() => dispatch(getProducts()));
}
export const pachProduct = (id , data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.patch(`/products/${id}`,data, getConfig())
        .then((res) => dispatch(console.log(res) , swal( "success" , res.statusText , "success") ))
        .catch((err) => dispatch(console.log(err) , swal("Error", err.response.data.message, "error")))
        .finally(() => dispatch(setIsLoading(false)))
        .finally(() => dispatch(getProducts()));
}
export const deleteProduct = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`/products/${id}`, getConfig())
        .then((res) => dispatch(console.log(res) , swal( "success" , res.statusText , "success") ))
        .catch((err) => dispatch(console.log(err) , swal("Error", err.response.data.message, "error")))
        .finally(() => dispatch(setIsLoading(false)))
        .finally(() => dispatch(getMyProducts()));
}


export default productsSlice.reducer;