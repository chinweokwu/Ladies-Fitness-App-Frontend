import {
  CALORIES_LOADING,
  CALORIES_LOAD_SUCCESS,
  CALORIES_LOAD_ERROR,
  CALORIES_CREATING,
  CALORIES_CREATE_SUCCESS,
  CALORIES_CREATE_ERROR,
  CALORIES_DELETE_SUCCESSFUL
} from './constants';

const initialState = {  
  list: [],
  requesting: false,
  successful: false,
  errors: [],
}

const caloryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CALORIES_CREATING:
      return {
        ...state,
        requesting: true,
        successful: false,
        errors: [],
      }
    case CALORIES_CREATE_SUCCESS:
      return {
        list: state.list.concat([action.calory]),
        requesting: false,
        successful: true,
        errors: [],
      }
    case CALORIES_CREATE_ERROR:
      return {
        ...state,
        requesting: false,
        successful: false,
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
      }
    case CALORIES_LOADING:
      return {
        ...state, 
        requesting: true,
        successful: false,
        errors: [],
      }
    case CALORIES_LOAD_SUCCESS:
      return {
        list: action.calories,
        requesting: false,
        successful: true,
        errors: [],
      }
    case CALORIES_LOAD_ERROR:
      return {
        requesting: false,
        successful: false,
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
      }
    case CALORIES_DELETE_SUCCESSFUL:
      const newResult = state.list.filter(calory => calory.id !== action.id);
      return newResult
    default:
      return state
  }
}
export default caloryReducer;