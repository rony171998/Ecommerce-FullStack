import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./slices/isLoading.slice";
import products from "./slices/products.slice";
import category from "./slices/category.slice";
import cart from "./slices/cart.slice";
import purchases from "./slices/purchases.slice";
import user from "./slices/user.slice";

export default configureStore({
  reducer: {
    isLoading,
    products,
    category,
    cart,
    purchases,
    user
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    
});
