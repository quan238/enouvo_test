import axios from 'axios';

const fetchStoreDetail = (id) => {
  return axios.get(`/stores/${id}`);
};

const StoreDetail = {
  fetchStoreDetail
};

export default StoreDetail;
