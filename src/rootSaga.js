import WorkoutsSaga from './workout/sagas'

export default function* rootSaga () {
  yield[
    WorkoutsSaga
  ]
};