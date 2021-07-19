import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { LOGIN } from "./constants";
import { loginSuccess, loginFaliure } from "./action";
import { browserHistory } from "react-router";

const submitLogin = async (user) => {
  const response = await axios.post(URL, {
    user,
  });
  return { token: response.data.accessToken };
};

function* loginCreateFlow(action) {
  try {
    const { payload } = action;
    const createLogin = yield call(submitLogin, payload);
    yield put(loginSuccess(createLogin));
    browserHistory.push("/");
  } catch (error) {
    yield put(loginFaliure(error));
  }
}

function* loginWatcher() {
  yield takeLatest(LOGIN.REQUESTING, loginCreateFlow);
}

export default loginWatcher;
