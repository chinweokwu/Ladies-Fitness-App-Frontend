import { spawn } from 'redux-saga/effects'
import WorkoutsSaga from './workout/sagas'

export default function* rootSaga () {
  yield spawn(WorkoutsSaga)
};