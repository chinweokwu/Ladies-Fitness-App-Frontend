import {
  CALORIES_LOADING,
  CALORIES_LOAD_SUCCESS,
  CALORIES_LOAD_ERROR,
  CALORIES_CREATING,
  CALORIES_CREATE_SUCCESS,
  CALORIES_CREATE_ERROR,
  CALORY_DELETE
} from './constants';

const initialState = {  
  list: [],
  requesting: false,
  errors: [],
}

const caloryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CALORIES_CREATING:
      return {
        ...state,
        requesting: true,
        errors: [],
      }
    case CALORIES_CREATE_SUCCESS:
      return {
        list: state.list.concat([action.payload]),
        requesting: false,
        errors: [],
      }
    case CALORIES_CREATE_ERROR:
      return {
        ...state,
        requesting: false,
        errors: state.errors.concat([{
          body: action.payload.toString(),
          time: new Date(),
        }]),
      }
    case CALORIES_LOADING:
      return {
        ...state, 
        requesting: true,
        errors: [],
      }
    case CALORIES_LOAD_SUCCESS:
      return {
        list: action.payload,
        requesting: false,
        successful: true,
        errors: [],
      }
    case CALORIES_LOAD_ERROR:
      return {
        requesting: false,
        errors: state.errors.concat([{
          body: action.payload.toString(),
          time: new Date(),
        }]),
      }
    case CALORY_DELETE:
      const newResult = state.list.filter(calory => calory.id !== action.payload);
      return newResult
    default:
      return state
  }
}
export default caloryReducer;