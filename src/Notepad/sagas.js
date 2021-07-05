import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { NOTEPADS } from "./constants";
import { getNotepads, getError, setNotepad, errorsFromCreate } from "./action";

const fetchNotepads = async () => {
  const response = await axios.get("");
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
  const response = await axios.post("", notepad);
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

function* notepadWatcher() {
  yield takeLatest(NOTEPADS.LOAD, handleNotepadsFlow);
  yield takeLatest(NOTEPADS.CREATING, notepadCreateFlow);
}

export default notepadWatcher;
