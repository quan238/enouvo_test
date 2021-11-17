import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { API } from 'apis';
import { errorNotification, getError } from 'utils/Notifcation';
import listDetailAction from '../actions/detailActions';
import { fetchStoreDetailRequest, fetchStoreDetailSuccess } from '../reducers/detailReducer';

function* fetchDetailStore({ payload }) {
  try {
    const { id } = payload;
    yield put(fetchStoreDetailRequest());
    const { data } = yield call(API.storeDetailAPI.fetchStoreDetail, id);
    yield put(fetchStoreDetailSuccess(data));
  } catch (error) {
    errorNotification(getError(error));
  }
}

function* watchFetchDetailStore() {
  yield takeLatest(listDetailAction.FETCH_STORE_DETAIL, fetchDetailStore);
}

export default function* storeDetailSaga() {
  yield all([watchFetchDetailStore()]);
}
