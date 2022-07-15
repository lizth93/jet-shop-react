import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], changed: false, showSpinner: false };

const productSlice = createSlice({
  name: "itemsProducts",
  initialState,
  reducers: {
    renderSpinner(state) {
      state.showSpinner = !state.showSpinner;
    },
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
