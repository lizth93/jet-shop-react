import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import paginationSlice from "./pagination-slice";
import productSlice from "./product-slice";

const store = configureStore({
  reducer: {
    itemsProducts: productSlice.reducer,
    pagination: paginationSlice.reducer,
    itemsAuth: authSlice.reducer,
  },
});

export default store;
