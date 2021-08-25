import AUTH from './constants';

export const registerStart = (credentials) => ({
  type: AUTH.SIGNUP_START,
  credentials,
});

export const registerSuccess = (user) => ({
  type: AUTH.SIGNUP_SUCCESS,
  user,
});

export const registerFailure = (error) => ({
  type: AUTH.SIGNUP_FAILURE,
  error,
});

export const logInStart = (credentials) => ({
  type: AUTH.LOGIN_START,
  credentials,
});

export const logInSuccess = (user) => ({
  type: AUTH.LOGIN_SUCCESS,
  user,
});

export const logInFailure = (error) => ({
  type: AUTH.LOGIN_FAILURE,
  error,
});

export const logOut = () => ({
  type: AUTH.LOG_OUT,
});
