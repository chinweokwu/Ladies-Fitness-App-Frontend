import {
  CALORIES_LOADING,
  CALORIES_LOAD_SUCCESS,
  CALORIES_LOAD_ERROR,
  CALORIES_CREATING,
  CALORIES_CREATE_SUCCESS,
  CALORIES_CREATE_ERROR,
  CALORIES_DELETE_SUCCESSFUL
} from './constants';

export const creatingCalories = (calory) => {
  return {
    type: CALORIES_CREATING,
    calory
  }
}

export const createCaloriesSuccess = (calory) => {
  return {
    type: CALORIES_CREATE_SUCCESS,
    calory
  }
}

export const createCaloriesError = (error) => {
  return {
    type: CALORIES_CREATE_ERROR,
    error
  }
}

export const caloriesLoading = () => {
  return {
    type: CALORIES_LOADING,
  }
}

export const carloriesLoadSuccess = (calories) => {
  return {
    type: CALORIES_LOAD_SUCCESS,
    calories
  }
}

export const caloriesLoadError = (error) => {
  return {
    type: CALORIES_LOAD_ERROR,
    error
  }
}


export const deleteCaloriesSuccessful = (id) => {
  return {
    type: CALORIES_DELETE_SUCCESSFUL,
    id
  }
}

