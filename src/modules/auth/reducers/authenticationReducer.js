const { checkAuthenticate } = require('../saga/authenticationSaga');
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: checkAuthenticate(),
  isFetching: false
};

const authenticationSlice = createSlice({
  name: 'authenticationSlice',
  initialState,
  reducers: {}
});

export const AuthenticationReducer = authenticationSlice.reducer;
