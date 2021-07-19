import { LOGIN, LOG_OUT } from "./constants";

export const requestSignup = (user) => {
  return {
    type: LOGIN.REQUESTING,
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN.SUCCESS,
    user,
  };
};

export const loginFaliure = (error) => {
  return {
    type: LOGIN.ERROR,
    error,
  };
};

export const logOut = () => ({
  type: LOG_OUT,
});
