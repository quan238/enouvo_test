import authSaga from 'modules/auth/saga/authenticationSaga';
import storeDetailSaga from 'modules/detail/saga/detailSaga';
import listSaga from 'modules/list/saga/listSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authSaga(), listSaga(), storeDetailSaga()]);
}
