import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "itemsAuth",
  initialState: {
    isLogin: true,
    token: null,
    authenticated: false,
    isLoading: false,
  },
  reducers: {
    setIsLogin(state) {
      state.isLogin = !state.isLogin;
    },
    setToken(state, action) {
      state.token = action.payload;
      state.authenticated = true;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setLogout(state) {
      state.token = null;
      state.authenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
