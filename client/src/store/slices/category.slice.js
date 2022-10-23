import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import { swal } from '../../components';

export const categorySlice = createSlice({
    
    name: 'category',
    initialState: [],
    reducers: {
        setCategories: (state, action) => {
            return action.payload
        }
    }
})
export const { setCategories  } = categorySlice.actions;

const getConfig = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const getCategories = () => (dispatch) => {
    return axios.get(`/products/categories`)
        .then(res =>dispatch(setCategories(res.data)))    
}

export const postCategory = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("/products/categories", data, getConfig())
        .then((res) => dispatch(swal( "success" , res.statusText , "success") ))
        .catch((err) => dispatch(console.log(err) , swal("Error", err.response.data.message, "error")))
        .finally(() => dispatch(setIsLoading(false)));       
}
export default categorySlice.reducer;
