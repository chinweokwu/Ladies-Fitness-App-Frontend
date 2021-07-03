import { combineReducers } from 'redux';
import calories from './Calories/reducers';
import workouts from './workout/reducer';

const rootReducer = combineReducers({
  calories,
  workouts
});

export default rootReducer;
