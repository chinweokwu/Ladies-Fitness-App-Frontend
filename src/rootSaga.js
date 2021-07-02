import CaloriesSaga from './Calories/sagas';

export default function* rootSaga () {
  yield[
    CaloriesSaga
  ]
};