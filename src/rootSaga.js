import { spawn } from "redux-saga/effects";
import WorkoutsSaga from "./workout/sagas";
import CaloriesSaga from "./Calories/sagas";
import NotepadSaga from "./Notepad/sagas";

export default function* rootSaga() {
  yield spawn(WorkoutsSaga);
  yield spawn(CaloriesSaga);
  yield spawn(NotepadSaga);
}
