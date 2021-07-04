import { CALORIES } from "./constants";

export const loadCalories = () => {
  return {
    type: CALORIES.LOAD,
  };
};

export const getCalories = (calories) => {
  return {
    type: CALORIES.LOAD_SUCCESS,
    calories,
  };
};

export const getError = (error) => {
  return {
    type: CALORIES.LOAD_ERROR,
    error,
  };
};
