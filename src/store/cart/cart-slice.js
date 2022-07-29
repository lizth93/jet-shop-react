import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    totalAmount: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.changed = true;
    },
    addItemToCart(state) {
      state.totalQuantity++;
      state.changed = true;
    },
    setTotalAmount(state, action) {
      state.totalAmount = action.payload;
    },
    removeItemToCart(state) {
      state.totalQuantity--;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
