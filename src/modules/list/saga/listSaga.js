import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { API } from 'apis';
import { errorNotification, getError } from 'utils/Notifcation';
import listAction from '../actions/listAction';
import { fetchStoreRequest, fetchStoreSuccess } from '../reducers/listReducer';

function* fetchListStore({ payload }) {
  try {
    const { page, orderBy } = payload;
    yield put(fetchStoreRequest());
    const { data } = yield call(API.storeAPI.fetchStoreList, page, orderBy);

    const { results, total } = data;
    yield put(fetchStoreSuccess({ data: results, total }));
  } catch (error) {
    errorNotification(getError(error));
  }
}

function* watchFetchListStore() {
  yield takeLatest(listAction.FETCH_STORE_LIST, fetchListStore);
}

export default function* listSaga() {
  yield all([watchFetchListStore()]);
}
