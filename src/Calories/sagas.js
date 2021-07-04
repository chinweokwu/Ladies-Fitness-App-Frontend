import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { CALORIES } from "./constants";
import { getCalories, getError } from "./action";

const fetchCalories = async () => {
  const response = await axios.get("https://api.tvmaze.com/search/shows?q=bad");
  return response.data;
};

function* handleCaloriesFlow() {
  try {
    const calories = yield call(fetchCalories);
    yield put(getCalories(calories));
  } catch (error) {
    yield put(getError(error));
  }
}

function* caloryWatcher() {
  yield takeLatest(CALORIES.LOAD, handleCaloriesFlow);
}

export default caloryWatcher;
