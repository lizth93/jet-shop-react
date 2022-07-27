import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice";
import cartSlice from "./cart/cart-slice";
import paginationSlice from "./pagination/pagination-slice";
import productSlice from "./products/product-slice";

const store = configureStore({
  reducer: {
    itemsProducts: productSlice.reducer,
    pagination: paginationSlice.reducer,
    itemsAuth: authSlice.reducer,
    cartItems: cartSlice.reducer,
  },
});

export default store;
