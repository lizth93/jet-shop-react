import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./pagination-slice";
import productSlice from "./product-slice";

const store = configureStore({
  reducer: {
    itemsProducts: productSlice.reducer,
    pagination: paginationSlice.reducer,
  },
});

export default store;
