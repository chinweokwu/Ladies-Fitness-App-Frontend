import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { WORKOUTS } from './constants';
import { setWorkouts, getError } from './action';

const fetchWorkouts = async() => {
  const response = await axios.get('https://api.tvmaze.com/search/shows?q=bad');
  return response.data;
}

function* handleWorkoutsFlow() {
  try {
    const workouts = yield call(fetchWorkouts)
    yield put(setWorkouts (workouts))
  } catch (error) {
    yield put(getError(error))
  }
}

function* workoutWatcher () {  
  yield takeLatest(WORKOUTS.LOAD, handleWorkoutsFlow)
}

export default workoutWatcher;
