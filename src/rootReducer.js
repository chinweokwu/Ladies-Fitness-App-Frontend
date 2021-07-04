import { combineReducers } from "redux";
import workoutsReducer from "./workout/reducer";
import caloriesReducer from "./Calories/reducer";

const rootReducer = combineReducers({
  workouts: workoutsReducer,
  calories: caloriesReducer,
});

export default rootReducer;
