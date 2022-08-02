import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "historyItems",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    replaceItems(state, action) {
      state.items = action.payload;
    },
  },
});
export const historyActions = historySlice.actions;
export default historySlice;
