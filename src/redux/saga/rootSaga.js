import authSaga from 'modules/auth/saga/authenticationSaga';
import listSaga from 'modules/list/saga/listSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authSaga(), listSaga()]);
}
