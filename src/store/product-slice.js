import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "itemsProducts",
  initialState: {
    products: [],
    showSpinner: false,
    productDetail: null,
  },
  reducers: {
    renderSpinner(state) {
      state.showSpinner = !state.showSpinner;
    },

    replaceProducts(state, action) {
      if (action.payload.products) {
        state.products = action.payload.products;
      }
    },
    setProductDetail(state, action) {
      state.productDetail = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
