import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { WORKOUTS } from "./constants";
import { setWorkouts, getError } from "./action";

const fetchWorkouts = async () => {
  const response = await axios.get("https://serene-beyond-13704.herokuapp.com/api/v1/workouts");
  return response.data.attributes;
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
