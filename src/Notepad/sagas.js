import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { NOTEPADS } from "./constants";
import {
  getNotepads,
  getError,
  setNotepad,
  errorsFromCreate,
  deleteSuccess,
} from "./action";

const URL = "https://young-chamber-04260.herokuapp.com/api/v1/notepads";

const fetchNotepads = async () => {
  const response = await axios.get(URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
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
  console.log(notepad);
  const response = await axios.post(URL, {
    headers: {
      "Content-Type": "application/json",
    },
    notepad,
  });
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
  const deleteApi = `https://blooming-tor-13030.herokuapp.com/api/v1/notepads/${id}`;
  console.log(deleteApi);
  const response = await axios.delete(deleteApi);
  return response.data;
};

function* handleDeleteNotepadsFlow(action) {
  try {
    const { payload } = action;
    const newData = yield call(deleteNotepads, payload);
    yield put(deleteSuccess(newData));
  } catch (error) {
    yield put(console.log(error));
  }
}

function* notepadWatcher() {
  yield takeLatest(NOTEPADS.LOAD, handleNotepadsFlow);
  yield takeLatest(NOTEPADS.CREATING, notepadCreateFlow);
  yield takeLatest(NOTEPADS.DELETE_SUCCESS, handleDeleteNotepadsFlow);
}

export default notepadWatcher;
