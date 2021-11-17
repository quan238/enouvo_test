/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {
    data: [],
    total: null,
    isFetching: false
  }
};

const storeSlice = createSlice({
  name: 'storeSlice',
  initialState,
  reducers: {
    fetchStoreRequest: (state) => {
      state.list.isFetching = true;
    },
    fetchStoreSuccess: (state, action) => {
      state.list.data = action.payload.data;
      state.list.total = action.payload.total;
      state.list.isFetching = false;
    }
  }
});

export const { fetchStoreRequest, fetchStoreSuccess } = storeSlice.actions;

export const StoreReducer = storeSlice.reducer;
