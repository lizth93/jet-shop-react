import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "itemsProducts",
  initialState: {
    products: [],
    showSpinner: false,
    productDetail: null,
    searchProduct: null,
    isLoading: true,
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
    setSearch(state, action) {
      state.searchProduct = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
