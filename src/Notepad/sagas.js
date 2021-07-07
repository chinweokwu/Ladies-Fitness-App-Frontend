import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { NOTEPADS } from "./constants";
import { getNotepads, getError, setNotepad, errorsFromCreate } from "./action";

const URL = "https://serene-beyond-13704.herokuapp.com/api/v1/notepads";

const fetchNotepads = async () => {
  const response = await axios.get(URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response.data);
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
    body: JSON.stringify(notepad),
  });
  console.log(response.data);
  return response.data.data;
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

function* notepadWatcher() {
  yield takeLatest(NOTEPADS.LOAD, handleNotepadsFlow);
  yield takeLatest(NOTEPADS.CREATING, notepadCreateFlow);
}

export default notepadWatcher;
