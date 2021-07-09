import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { WORKOUTS } from "./constants";
import { setWorkouts, getError } from "./action";

const fetchWorkouts = async () => {
  console.log("");
  const URL = "https://blooming-tor-13030.herokuapp.com/api/v1/workouts";
  const response = await axios.get(URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response.data.data);
  return response.data.data;
};

function* handleWorkoutsFlow() {
  try {
    const workouts = yield call(fetchWorkouts);
    yield put(setWorkouts(workouts));
  } catch (error) {
    yield put(getError(error));
  }
}

function* workoutWatcher() {
  yield takeLatest(WORKOUTS.LOAD, handleWorkoutsFlow);
}

export default workoutWatcher;
