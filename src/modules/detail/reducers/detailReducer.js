/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  detail: {
    vehicles: [],
    name: '',
    address: '',
    description: '',
    city: '',
    phoneNumber: '',
    isFetching: false
  }
};

const storeDetailSlice = createSlice({
  name: 'storeSlice',
  initialState,
  reducers: {
    fetchStoreDetailRequest: (state) => {
      state.detail.isFetching = true;
    },
    fetchStoreDetailSuccess: (state, action) => {
      const { name, address, description, city, phoneNumber, vehicles } = action.payload;
      state.detail.isFetching = false;
      state.detail.name = name;
      state.detail.address = address;
      state.detail.city = city;
      state.detail.phoneNumber = phoneNumber;
      state.detail.description = description;
      state.detail.vehicles = vehicles;
    },
    updateStoreDetailRequest: (state) => {
      state.detail.isFetching = true;
    },
    updateStoreDetailSuccess: (state) => {
      state.detail.isFetching = false;
    }
  }
});

export const {
  fetchStoreDetailRequest,
  fetchStoreDetailSuccess,
  updateStoreDetailRequest,
  updateStoreDetailSuccess
} = storeDetailSlice.actions;

export const StoreDetailReducer = storeDetailSlice.reducer;
