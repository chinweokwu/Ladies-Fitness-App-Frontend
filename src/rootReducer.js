import { combineReducers } from 'redux';
import calories from './Calories/reducers';

const rootReducer = combineReducers({
  calories,
});

export default rootReducer;
