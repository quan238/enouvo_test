import { createSlice } from '@reduxjs/toolkit';

const { checkAuthenticate } = require('../saga/authenticationSaga');

const initialState = {
  isAuthenticated: checkAuthenticate(),
  isFetching: false
};

const authenticationSlice = createSlice({
  name: 'authenticationSlice',
  initialState,
  reducers: {
    loginUserRequest: (state) => {
      state.isAuthenticated = false;
      state.isFetching = true;
    },
    loginUserSuccess: (state) => {
      state.isAuthenticated = true;
      state.isFetching = true;
    },
    logoutUserSuccess: (state) => {
      state.isAuthenticated = false;
      state.isFetching = false;
    }
  }
});

export const { loginUserRequest, loginUserSuccess, logoutUserSuccess } =
  authenticationSlice.actions;

export const AuthenticationReducer = authenticationSlice.reducer;
