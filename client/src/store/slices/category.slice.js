import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost:4000/api/v1';
} else {
    axios.defaults.baseURL = 'https://ecommerce-express.azurewebsites.net/api/v1';  
}

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
        .then((res) => dispatch(alert(res.data.status)))
        .catch((err) => dispatch(console.log(err)))
        .finally(() => dispatch(setIsLoading(false)))
              
}
export default categorySlice.reducer;
