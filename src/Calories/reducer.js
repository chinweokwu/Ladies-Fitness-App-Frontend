import { CALORIES } from "./constants";

const initialState = {
  list: [],
  requesting: false,
  errors: [],
};

const caloriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CALORIES.LOAD:
      return {
        ...state,
        requesting: true,
        errors: [],
      };
    case CALORIES.LOAD_SUCCESS:
      return {
        list: action.calories,
        requesting: false,
        errors: [],
      };
    case CALORIES.LOAD_ERROR:
      return {
        requesting: false,
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date(),
          },
        ]),
      };
    case CALORIES.CREATE:
      return {
        ...state,
        requesting: true,
        errors: [],
      };
    case CALORIES.CREATE_SUCCESS:
      return {
        list: state.list.concat([action.calory]),
        requesting: false,
        errors: [],
      };
    case CALORIES.CREATE_ERROR:
      return {
        requesting: false,
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date(),
          },
        ]),
      };
    case CALORIES.DELETE_SUCCESS:
      return {
        ...state,
        list: state.list.filter((calory) => calory.id !== action.id),
      };
    default:
      return state;
  }
};
export default caloriesReducer;
