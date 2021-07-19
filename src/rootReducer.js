import { combineReducers } from "redux";
import workoutsReducer from "./workout/reducer";
import caloriesReducer from "./Calories/reducer";
import notepadsReducer from "./Notepad/reducers";
import signupReducer from "./Signup/reducer";

const rootReducer = combineReducers({
  workouts: workoutsReducer,
  calories: caloriesReducer,
  notepads: notepadsReducer,
  signup: signupReducer,
});

export default rootReducer;
