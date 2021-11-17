import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { API } from 'apis';
import { Message } from 'utils/Message';
import { errorNotification, getError, successNotification } from 'utils/Notifcation';
import listDetailAction from '../actions/detailActions';
import {
  fetchStoreDetailRequest,
  fetchStoreDetailSuccess,
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

function* updateDetailStore({ payload }) {
  try {
    const { id, data: oldData } = payload;
    yield put(updateStoreDetailRequest());
    const updateData = oldData.map(({ slug, createdAt, updatedAt, ...rest }) => rest);

    const { data } = yield call(API.storeDetailAPI.updateStoreDetail, id, updateData);

    yield put(updateStoreDetailSuccess());

    successNotification(Message.updateSuccess);
  } catch (error) {
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
