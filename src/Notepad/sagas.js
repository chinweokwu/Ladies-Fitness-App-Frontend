import { call, put, takeLatest } from 'redux-saga/effects';
import NOTEPADS from './constants';
import {
  getNotepads,
  getError,
  setNotepad,
  errorsFromCreate,
} from './action';
import { authAxios } from '../Services/userServices';

const fetchNotepads = async () => {
  const response = await authAxios.get('api/v1/notepads');
  return response.data;
};

function* handleNotepadsFlow() {
  try {
    const notepads = yield call(fetchNotepads);
    yield put(getNotepads(notepads));
  } catch (error) {
    yield put(getError(error));
  }
}

const submitNotepad = async (notepad) => {
  const response = await authAxios.post('api/v1/notepads', { notepad });
  return response.data;
};

function* notepadCreateFlow(action) {
  try {
    const { payload } = action;
    const createNotepad = yield call(submitNotepad, payload);
    yield put(setNotepad(createNotepad));
  } catch (error) {
    yield put(errorsFromCreate(error));
  }
}

const deleteNotepads = async (id) => {
  const response = await authAxios.delete(`api/v1/notepads/${id}`);
  return response.data;
};

function* handleDeleteNotepadsFlow(action) {
  try {
    const { payload } = action;
    yield call(deleteNotepads, payload);
    const newData = yield call(fetchNotepads);
    yield put(getNotepads(newData));
  } catch (error) {
    yield put(error);
  }
}

function* notepadWatcher() {
  yield takeLatest(NOTEPADS.LOAD, handleNotepadsFlow);
  yield takeLatest(NOTEPADS.CREATING, notepadCreateFlow);
  yield takeLatest(NOTEPADS.DELETE_SUCCESS, handleDeleteNotepadsFlow);
}

export default notepadWatcher;
