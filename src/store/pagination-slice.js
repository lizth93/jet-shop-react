import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    total: 0,
    page: 1,
    pages: 0,
    skip: 0,
    limit: 4,
  },
  reducers: {
    // getPaginationQueryParams(state) {
    //   // state.skip = action.payload;

    //   state.skip =
    //     state.page === 1 ? 0 : state.page * state.limit - state.limit;

    //   if (state.total < state.skip) {
    //     state.skip = state.total;
    //   }
    //   return `limit=${state.limit}&skip=${state.skip}`;
    // },

    setTotalPages(state, action) {
      state.total = action.payload;
      console.log(action.payload, "this are the total");
    },

    calculatePages(state) {
      state.pages = Math.ceil(state.total / state.limit);
    },
  },
});

export const paginationActions = paginationSlice.actions;
export default paginationSlice;
