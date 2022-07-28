import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      // state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.changed = true;
    },
    addItemToCart(state) {
      state.totalQuantity++;
      state.changed = true;
    },
    removeItemToCart(state) {
      state.totalQuantity--;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
