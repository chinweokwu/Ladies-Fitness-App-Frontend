import { call, put, takeLatest } from 'redux-saga/effects';
import WORKOUTS from './constants';
import { setWorkouts, getError } from './action';
import { authAxios } from '../Services/userServices';

const fetchWorkouts = async () => {
  const response = await authAxios.get('api/v1/workouts');
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
