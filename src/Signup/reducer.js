import { SIGNUP } from "./constants";

const initialState = {
  currentUser: null,
  requesting: false,
  errors: [],
};

const reducer = function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP.REQUESTING:
      return {
        requesting: true,
        errors: [],
        currentUser: null,
      };

    case SIGNUP.REQUEST_SUCCESS:
      return {
        requesting: false,
        currentUser: action.payload,
        error: [],
      };

    case SIGNUP.REQUEST_ERROR:
      return {
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date(),
          },
        ]),
        requesting: false,
      };

    default:
      return state;
  }
};

export default reducer;
