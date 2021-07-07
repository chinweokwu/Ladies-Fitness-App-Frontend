import { NOTEPADS } from "./constants";

const initialState = {
  list: [],
  requesting: false,
  errors: [],
};

const notepadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTEPADS.LOAD:
      return {
        ...state,
        requesting: true,
        errors: [],
      };
    case NOTEPADS.LOAD_SUCCESS:
      return {
        list: action.notepads,
        requesting: false,
        errors: [],
      };
    case NOTEPADS.LOAD_ERROR:
      return {
        requesting: false,
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date(),
          },
        ]),
      };
    case NOTEPADS.CREATING:
      return {
        ...state,
        requesting: true,
        errors: [],
      };
    case NOTEPADS.CREATE_SUCCESS:
      return {
        list: state.list.concat([action.notepad]),
        requesting: false,
        errors: [],
      };
    case NOTEPADS.CREATE_ERROR:
      return {
        requesting: false,
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date(),
          },
        ]),
      };
    case NOTEPADS.DELETE_SUCCESS:
      return {
        ...state,
        list: state.list.filter((notepad) => notepad.id !== action.id),
      };
    default:
      return state;
  }
};
export default notepadsReducer;
