import { spawn } from "redux-saga/effects";
import WorkoutsSaga from "./workout/sagas";
import CaloriesSaga from "./Calories/sagas";

export default function* rootSaga() {
  yield spawn(WorkoutsSaga);
  yield spawn(CaloriesSaga);
}
