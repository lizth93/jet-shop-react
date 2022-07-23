import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "itemsAuth",
  initialState: {
    authenticated: false,
    email: null,
    password: null,
    token: null,
  },
  reducers: {
    setAuthenticated(state) {
      state.authenticated = !state.authenticated;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
