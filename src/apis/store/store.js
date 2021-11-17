import axios from 'axios';

const fetchStoreList = (page, orderBy, perPage = 10, limit = 100) => {
  return axios.get(`/stores`, {
    params: { page, orderBy, perPage, limit }
  });
};

const Store = {
  fetchStoreList
};

export default Store;
