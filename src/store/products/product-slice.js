import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "itemsProducts",
  initialState: {
    products: [],
    productDetail: null,
    productComments: null,
    searchProduct: null,
    isLoading: true,
    isLoadingComments: true,
    hasError: null,
  },
  reducers: {
    replaceProducts(state, action) {
      if (action.payload.products) {
        state.products = action.payload.products;
      }
    },
    setProductDetail(state, action) {
      state.productDetail = action.payload;
    },
    setProductComments(state, action) {
      state.productComments = action.payload;
    },
    setSearch(state, action) {
      state.searchProduct = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsLoadingComments(state, action) {
      state.isLoadingComments = action.payload;
    },

    setClear(state) {
      state.productDetail = null;
      state.isLoading = true;
    },
    setError(state, action) {
      state.hasError = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
