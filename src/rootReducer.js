import { combineReducers } from 'redux';
import workoutsReducer from './workout/reducer';
import caloriesReducer from './Calories/reducer';
import notepadsReducer from './Notepad/reducers';
import authReducer from './Auth/reducers';

const rootReducer = combineReducers({
  workouts: workoutsReducer,
  calories: caloriesReducer,
  notepads: notepadsReducer,
  auths: authReducer,
});

export default rootReducer;
