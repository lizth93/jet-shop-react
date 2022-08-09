import { createSlice } from "@reduxjs/toolkit";
import { RES_PER_PAGE } from "config";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    total: 0,
    page: 1,
    pages: 0,
    skip: 0,
    limit: RES_PER_PAGE,
  },
  reducers: {
    setSkipPages(state, action) {
      state.skip = action.payload;
    },
    setCurrentPage(state, action) {
      state.page = action.payload;
    },

    setTotalPages(state, action) {
      state.total = action.payload;
    },
    calculatePages(state) {
      state.pages = Math.ceil(state.total / state.limit);
    },
  },
});

export const paginationActions = paginationSlice.actions;
export default paginationSlice;
