import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    totalAmount: 0,
    isLoading: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.changed = true;
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    addItemToCart(state) {
      state.totalQuantity++;
      state.changed = true;
    },
    setTotalAmount(state, action) {
      state.totalAmount = action.payload;
    },
    setTotalQuantity(state, action) {
      state.totalQuantity = action.payload;
    },
    removeItemToCart(state) {
      state.totalQuantity--;
      state.changed = true;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
