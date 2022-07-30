import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    totalAmount: 0,
    isLoading: false,
    cartSended: false,
  },
  reducers: {
    setChanged(state) {
      state.changed = true;
    },
    replaceCart(state, action) {
      state.items = action.payload.items;
    },
    saveItemsTemporaly(state) {
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    addItemToCart(state) {
      state.totalQuantity++;
    },
    setTotalAmount(state, action) {
      state.totalAmount = action.payload;
    },
    setTotalQuantity(state, action) {
      state.totalQuantity = action.payload;
    },
    removeItemToCart(state) {
      state.totalQuantity--;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsSended(state, action) {
      state.cartSended = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
