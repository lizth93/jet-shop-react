import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "itemsProducts",
  initialState: {
    products: [],
    changed: false,
  },
  reducers: {
    replaceProducts(state, action) {
      state.changed = true;
      if (action.payload.products) {
        state.products = action.payload.products;
      }
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
