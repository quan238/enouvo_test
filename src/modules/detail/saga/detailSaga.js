/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';
import { API } from 'apis';
import { Message } from 'utils/Message';
import { errorNotification, getError, successNotification } from 'utils/Notifcation';
import listDetailAction from '../actions/detailActions';
import {
  fetchStoreDetailRequest,
  fetchStoreDetailSuccess,
  updateStoreDetailError,
  updateStoreDetailRequest,
  updateStoreDetailSuccess
} from '../reducers/detailReducer';

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

function* shouldFetchDetailStore(storeId) {
  yield fork(fetchDetailStore, { payload: { id: storeId } });
}

function* updateDetailStore({ payload }) {
  const { id, data: oldData } = payload;
  try {
    yield put(updateStoreDetailRequest());
    const updateData = oldData.map(({ slug, createdAt, updatedAt, ...rest }) => rest);

    yield call(API.storeDetailAPI.updateStoreDetail, id, updateData);

    yield put(updateStoreDetailSuccess());

    successNotification(Message.updateSuccess);
  } catch (error) {
    yield put(updateStoreDetailError(error));
    yield shouldFetchDetailStore(id);
    errorNotification(getError(error));
  }
}

function* watchFetchDetailStore() {
  yield takeLatest(listDetailAction.FETCH_STORE_DETAIL, fetchDetailStore);
}

function* watchUpdateDetailStore() {
  yield takeLatest(listDetailAction.UPDATE_STORE_DETAIL, updateDetailStore);
}

export default function* storeDetailSaga() {
  yield all([watchFetchDetailStore(), watchUpdateDetailStore()]);
}
