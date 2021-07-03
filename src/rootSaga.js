import CaloriesSaga from './Calories/sagas';
import WorkoutsSaga from './workout/sagas'

export default function* rootSaga () {
  yield[
    CaloriesSaga,
    WorkoutsSaga
  ]
};