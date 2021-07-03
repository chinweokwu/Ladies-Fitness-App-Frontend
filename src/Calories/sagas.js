import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { handleApiErrors } from '../lib/api-errors';
import { CALORIES_CREATING, CALORIES_LOADING, CALORY_DELETE } from './constants';
import {
  createCaloriesSuccess,
  createCaloriesError,
  carloriesLoadSuccess,
  caloriesLoadError,
  deleteCaloriesSuccessful
} from './actions';

function handleRequest (request) {  
  return request
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch((error) => { throw error })
}

function createCaloriesApi (calories){
  const caloriesUrl = "http://localhost:3001/api/v1/calories"
  return axios.post(caloriesUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(calories),
  })
  .then(handleApiErrors)
  .then(response => response.json())
  .then(json => json)
  .catch((error) => { throw error })
}

function* caloriesCreateFlow (action) {  
  try {
    const { payload } = action
    const createdCalory = yield call(createCaloriesApi, payload)
    yield put(createCaloriesSuccess(createdCalory))
  } catch (error) {
    yield put(createCaloriesError(error))
  }
}

function caloriesRequestApi () {
  const request = axios.get("http://localhost:3001/api/v1/calories")
  return handleRequest(request)
}

function* caloriesRequestFlow() {
  try {
    const calories = yield call(caloriesRequestApi)
    yield put(carloriesLoadSuccess(calories))
  } catch (error) {
    yield put(caloriesLoadError(error))
  }
}

function caloryDeleteAPI (id) {
  const caloryDeleteUrl = `http://localhost:3001/api/v1/carlories/${id}`
  const request = axios(caloryDeleteUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return handleRequest(request)
}

function* caloryDeleteFlow (action) {
  try {
    const { payload } = action
    const calory = yield call(caloryDeleteAPI, payload);
    yield put(deleteCaloriesSuccessful(calory));
  } catch (error) {
    console.log(error)
  }
}

function* caloriesWatcher () {  
  yield [
    takeLatest(CALORIES_CREATING, caloriesCreateFlow),
    takeLatest(CALORIES_LOADING, caloriesRequestFlow),
    takeLatest(CALORY_DELETE, caloryDeleteFlow)
  ]
}

export default caloriesWatcher;
