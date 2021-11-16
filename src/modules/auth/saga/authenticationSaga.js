function setAccessToken(authResult) {
  //   const expiresAt = moment(authResult.expiration).valueOf()
  localStorage.setItem('accessToken', authResult.accessToken);
  sessionStorage.setItem('accessToken', authResult.accessToken);

  const loggedIn = 'true';
  localStorage.setItem('logged-in', loggedIn);
  sessionStorage.setItem('logged-in', loggedIn);
}

export function getAccessToken() {
  const accessToken = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
  return accessToken;
}

export function checkAuthenticate() {
  if (getAccessToken()) {
    return true;
  }
  return false;
}
