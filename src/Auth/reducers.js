import AUTH from './constants';

const initialState = {
  requesting: false,
  error: [],
  currentUser: null,
  successful: true,
  messages: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.SIGNUP_START:
    case AUTH.LOGIN_START:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Signing up...', time: new Date() }],
        errors: [],
      };
    case AUTH.LOGIN_SUCCESS:
    case AUTH.SIGNUP_SUCCESS:
      return {
        ...state,
        errors: [],
        requesting: false,
        currentUser: action.user,
        messages: [],
        successful: true,
      };
    case AUTH.LOGIN_FAILURE:
    case AUTH.SIGNUP_FAILURE:
      return {
        ...state,
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date(),
          },
        ]),
        messages: [],
        requesting: false,
        successful: false,
      };
    case AUTH.LOG_OUT:
      localStorage.removeItem('user');
      localStorage.removeItem('jwt');
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
