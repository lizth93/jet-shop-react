import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "itemsAuth",
  initialState: {
    email: null,
    nickname: null,
    isLogin: true,
    token: null,
    authenticated: false,
    isLoading: false,
    error: false,
  },
  reducers: {
    setIsLogin(state) {
      state.isLogin = !state.isLogin;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setNickName(state, action) {
      state.nickname = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setAuthenticated(state, action) {
      state.authenticated = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setLogout(state) {
      state.token = null;
      state.email = null;
      state.nickname = null;
      state.authenticated = false;
      localStorage.removeItem("token");
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
