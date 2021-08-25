import { call, put, takeLatest } from 'redux-saga/effects';
import history from '../history';
import AUTH from './constants';
import {
  registerSuccess,
  logInSuccess,
  registerFailure,
  logInFailure,
} from './actions';
import * as service from '../Services/userServices';

function* loginCreateFlow(action) {
  try {
    const { payload } = action;
    const createLogin = yield call(service.Login, payload);
    yield put(logInSuccess(createLogin));
    history.push('/Workouts');
    window.location.reload();
  } catch (error) {
    yield put(logInFailure(error));
  }
}

function* signupCreateFlow(action) {
  try {
    const { payload } = action;
    const createSignup = yield call(service.Signup, payload);
    yield put(registerSuccess(createSignup));
    history.push('/Workouts');
    window.location.reload();
  } catch (error) {
    yield put(registerFailure(error));
  }
}

function* authWatcher() {
  yield takeLatest(AUTH.SIGNUP_START, signupCreateFlow);
  yield takeLatest(AUTH.LOGIN_START, loginCreateFlow);
}

export default authWatcher;
