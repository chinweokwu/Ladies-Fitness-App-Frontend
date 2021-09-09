import CALORIES from './constants';

export const loadCalories = () => ({
  type: CALORIES.LOAD,
});

export const getCalories = (calories) => ({
  type: CALORIES.LOAD_SUCCESS,
  calories,
});

export const getError = (error) => ({
  type: CALORIES.LOAD_ERROR,
  error,
});

export const createCalory = (calory) => ({
  type: CALORIES.CREATE,
  calory,
});

export const setCalory = (calory) => ({
  type: CALORIES.CREATE_SUCCESS,
  calory,
});

export const errorsFromCreate = (error) => ({
  type: CALORIES.CREATE_ERROR,
  error,
});

export const deleteSuccess = (id) => ({
  type: CALORIES.DELETE_SUCCESS,
  id,
});
