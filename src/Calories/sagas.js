import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { CALORIES } from "./constants";
import { getCalories, getError, setCalory, errorsFromCreate } from "./action";

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

const submitCalories = async (calory) => {
  const response = await axios.post("", calory);
  return response.data;
};

function* caloriesCreateFlow(action) {
  try {
    const { payload } = action;
    const createCalory = yield call(submitCalories, payload);
    yield put(setCalory(createCalory));
  } catch (error) {
    yield put(errorsFromCreate(error));
  }
}

function* caloryWatcher() {
  yield takeLatest(CALORIES.LOAD, handleCaloriesFlow);
  yield takeLatest(CALORIES.CREATE, caloriesCreateFlow);
}

export default caloryWatcher;
