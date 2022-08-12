import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const newsSlice = createSlice({
    name: 'news',
    initialState: [],
    reducers: {
        setNews: (state, action) => {
            return action.payload
        }
    }
})

export const { setNews } = newsSlice.actions;

export const getNews = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://news-app-academlo.herokuapp.com/news/")
        .then(res => dispatch(setNews(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterHeadline = (query) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://news-app-academlo.herokuapp.com/news/?headline__icontains=${query}`)
        .then(res => dispatch(setNews(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterCategory = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://news-app-academlo.herokuapp.com/news/?category=${id}`)
        .then(res => dispatch(setNews(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export default newsSlice.reducer;
