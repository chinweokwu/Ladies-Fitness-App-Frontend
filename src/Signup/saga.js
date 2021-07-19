import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { SIGNUP } from "./constants";
import { signupSuccess, signupFaliure } from "./action";
import { browserHistory } from "react-router";

const submitSignup = async (user) => {
  const response = await axios.post(URL, {
    user,
  });
  return { token: response.data.accessToken };
};

function* signupCreateFlow(action) {
  try {
    const { payload } = action;
    const createSignup = yield call(submitSignup, payload);
    yield put(signupSuccess(createSignup));
    browserHistory.push("/");
  } catch (error) {
    yield put(signupFaliure(error));
  }
}

function* signupWatcher() {
  yield takeLatest(SIGNUP.REQUESTING, signupCreateFlow);
}

export default signupWatcher;
