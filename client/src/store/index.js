import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./slices/isLoading.slice";
import news from "./slices/news.slice";
import products from "./slices/products.slice";
import category from "./slices/category.slice";
import cart from "./slices/cart.slice";

export default configureStore({
  reducer: {
    isLoading,
    news,
    products,
    category,
    cart
  }
});
