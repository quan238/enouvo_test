import axios from 'axios';

const fetchStoreDetail = (id) => {
  return axios.get(`/stores/${id}`);
};

const updateStoreDetail = (id, store) => {
  const data = { vehicles: store };
  return axios.put(`/stores/${id}`, data);
};

const StoreDetail = {
  fetchStoreDetail,
  updateStoreDetail
};

export default StoreDetail;
