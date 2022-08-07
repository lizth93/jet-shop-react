import { createSlice } from "@reduxjs/toolkit";
import { KEY_SAVE_STORAGE } from "config";

const authSlice = createSlice({
  name: "itemsAuth",
  initialState: {
    email: null,
    isLogin: true,
    token: null,
    isLoading: false,
    message: false,
  },
  reducers: {
    setIsLogin(state) {
      state.isLogin = !state.isLogin;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },

    setToken(state, action) {
      state.token = action.payload;
    },

    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setLogout(state) {
      state.token = null;
      state.email = null;
      localStorage.removeItem(KEY_SAVE_STORAGE);
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
