import SIGNUP from "./constants";

export const requestSignup = (user) => {
  return {
    type: SIGNUP.REQUESTING,
  };
};

export const signupSuccess = (user) => {
  return {
    type: SIGNUP.REQUEST_SUCCESS,
    user,
  };
};

export const signupFaliure = (error) => {
  return {
    type: SIGNUP.REQUEST_ERROR,
    error,
  };
};
