import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { WORKOUTS_LOADING } from './constants';
import { workoutsLoadSuccess, workoutsLoadError } from './action';


async function requestWorkoutsApi () {
  return await axios.get("http://localhost:3001/api/v1/workouts")
    .then(response => response.data.attributes)
    .catch(error => error(error))
}

function* workoutsRequestFlow() {
  try {
    const workouts = yield call(requestWorkoutsApi)
    yield put(workoutsLoadSuccess (workouts))
  } catch (error) {
    yield put(workoutsLoadError(error))
  }
}

function* workoutWatcher () {  
  yield [
    takeLatest(WORKOUTS_LOADING, workoutsRequestFlow),
  ]
}

export default workoutWatcher;
