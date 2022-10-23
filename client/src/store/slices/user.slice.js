import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { swal, ToastSigned } from "../../components";
import { setIsLoading } from "./isLoading.slice";

export const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
        
    },
});

export const { setUser } = userSlice.actions;

const getConfig = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const getMyProducts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`/users/me` , getConfig())
        .then(res =>dispatch(setUser(res.data.user)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const login = (data) => (dispatch) =>  {
    dispatch(setIsLoading(true));
    return axios.post(`/users/login`, data)
        .then((res) => localStorage.setItem("token", res.data.token))
        .catch((error) => {swal("Error", error.response.data.message, "error"); })
        .finally(() => dispatch(setIsLoading(false)));
};

export const registerUser = (data) => (dispatch) =>  {
    dispatch(setIsLoading(true));
    return axios.post("/users", data)
        .then(() => dispatch(ToastSigned()))
        .catch((error) => {swal("Error", error.response.data.message, "error");})
        .finally(() => dispatch(setIsLoading(false)));
};

export default userSlice.reducer;