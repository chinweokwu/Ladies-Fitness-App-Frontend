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

const url = `${process.env.RAILS_APP_API_URL}`;

function handleRequest (request) {  
  return request
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch((error) => { throw error })
}

function createCaloriesApi (calory){
  const caloriesUrl = `${url}/api/v1/calory`
  return axios.post(caloriesUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(calory),
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
  const caloriesRequestUrl = `${url}/api/v1/calories`
  const request = axios.get(caloriesRequestUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
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
  const caloryDeleteUrl = `${url}/api/v1/carlories/${id}`
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
