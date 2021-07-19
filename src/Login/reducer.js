import { LOGIN, LOG_OUT } from "./constants";

const initialState = {
  currentUser: null,
  requesting: false,
  errors: [],
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.REQUESTING:
      return {
        requesting: true,
        errors: [],
        currentUser: null,
      };

    case LOGIN.SUCCESS:
      return {
        requesting: false,
        currentUser: action.payload,
        error: [],
      };

    case LOGIN.ERROR:
      return {
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date(),
          },
        ]),
        requesting: false,
      };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;
