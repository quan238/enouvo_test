import authSaga from 'modules/auth/saga/authenticationSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authSaga()]);
}
