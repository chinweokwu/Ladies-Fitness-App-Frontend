import { combineReducers } from 'redux';
import workoutsReducer from './workout/reducer';

const rootReducer = combineReducers({
  workouts: workoutsReducer
});

export default rootReducer;
