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

export const createCalory = (calory) => {
  return {
    type: CALORIES.CREATE,
    calory,
  };
};

export const setCalory = (calory) => {
  return {
    type: CALORIES.CREATE_SUCCESS,
    calory,
  };
};

export const errorsFromCreate = (error) => {
  return {
    type: CALORIES.CREATE_ERROR,
    error,
  };
};

export const deleteSuccess = (id) => {
  return {
    type: CALORIES.DELETE_SUCCESS,
    id,
  };
};
