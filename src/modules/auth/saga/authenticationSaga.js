import { all, call, takeLatest } from '@redux-saga/core/effects';
import { API } from 'apis';
import { history } from 'App/App';
import { Message } from 'utils/Message';
import { errorNotification, getError, successNotification } from 'utils/Notifcation';
import { LOGIN_USER } from '../actions/loginAction';

function setAccessToken(accessToken) {
  //   const expiresAt = moment(authResult.expiration).valueOf()
  localStorage.setItem('accessToken', accessToken);
  sessionStorage.setItem('accessToken', accessToken);

  const loggedIn = 'true';
  localStorage.setItem('logged-in', loggedIn);
  sessionStorage.setItem('logged-in', loggedIn);
}

export function getAccessToken() {
  const accessToken = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
  return accessToken;
}

export function checkAuthenticate() {
  const accessToken = getAccessToken();
  if (accessToken) {
    return true;
  }
  return false;
}

export function changeRoute() {
  history.push('/');
}

function* loginUser({ payload }) {
  try {
    const { data } = yield call(API.accountAPI.loginUser, payload);
    if (data) {
      const { token } = data;
      setAccessToken(token);
    }
    changeRoute();
    successNotification(Message.loginSuccess);
  } catch (error) {
    errorNotification(getError(error));
  }
}

function* watchLoginUser() {
  yield takeLatest(LOGIN_USER, loginUser);
}

export default function* authSaga() {
  yield all([watchLoginUser()]);
}
