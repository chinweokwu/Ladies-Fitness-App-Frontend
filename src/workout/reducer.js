import {
  WORKOUTS_LOADING, 
  WORKOUTS_LOAD_SUCESS,
  WORKOUTS_LOAD_ERROR
} from './constants';

const initialState = {  
  list: [],
  requesting: false,
  errors: [],
}

const workoutsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WORKOUTS_LOADING:
      return {
        ...state, 
        requesting: true,
        errors: [],
      }
    case WORKOUTS_LOAD_SUCESS:
      return {
        list: action.workouts,
        requesting: false,
        successful: true,
        errors: [],
      }
    case WORKOUTS_LOAD_ERROR:
      return {
        requesting: false,
        errors: state.errors.concat([{
          body: action.workouts.toString(),
          time: new Date(),
        }]),
      }
    default:
      return state
  }
}
export default workoutsReducer;