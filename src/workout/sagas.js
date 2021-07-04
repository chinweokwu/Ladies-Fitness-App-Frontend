import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { WORKOUTS } from './constants';
import { setWorkouts, getError } from './action';

 const fetchWorkouts = () => {
  return axios.get('http://localhost:3001/api/v1/workouts')
    .then(response => response.data.attributes)
    .catch(error => error(error))
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
  yield [
    takeLatest(WORKOUTS.LOAD, handleWorkoutsFlow),
  ]
}

export default workoutWatcher;
