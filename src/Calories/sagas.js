import { call, put, takeLatest } from "redux-saga/effects";
import { CALORIES } from "./constants";
import {
  getCalories,
  getError,
  setCalory,
  errorsFromCreate,
  deleteSuccess,
} from "./action";
import { authAxios } from "../Services/userServices";

const fetchCalories = async () => {
  const response = await authAxios.get("api/v1/calories");
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
  const response = await authAxios.post("api/v1/calories", {calory});
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

const deleteCalories = async (id) => {
  const response = await authAxios.delete(`api/v1/calories/${id}`);
  return response.data;
};

function* handleDeleteCaloriesFlow(action) {
  try {
    const { payload } = action;
    yield call(deleteCalories, payload);
    const newData = yield call(fetchCalories);
    yield put(getCalories(newData));
  } catch (error) {
    yield put(console.log(error));
  }
}
function* caloryWatcher() {
  yield takeLatest(CALORIES.LOAD, handleCaloriesFlow);
  yield takeLatest(CALORIES.CREATE, caloriesCreateFlow);
  yield takeLatest(CALORIES.DELETE_SUCCESS, handleDeleteCaloriesFlow);
}

export default caloryWatcher;
