import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const appSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {}
});

export const AppReducer = appSlice.reducer;
