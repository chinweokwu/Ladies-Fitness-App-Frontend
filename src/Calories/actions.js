import {
  CALORIES_LOADING,
  CALORIES_LOAD_SUCCESS,
  CALORIES_LOAD_ERROR,
  CALORIES_CREATING,
  CALORIES_CREATE_SUCCESS,
  CALORIES_CREATE_ERROR,
  CALORY_DELETE
} from './constants';

export const creatingCalories = (calories) => {
  return {
    type: CALORIES_CREATING,
    payload: calories
  }
}

export const createCaloriesSuccess = (calories) => {
  return {
    type: CALORIES_CREATE_SUCCESS,
    payload: calories
  }
}

export const createCaloriesError = (error) => {
  return {
    type: CALORIES_CREATE_ERROR,
    payload: error
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
    payload: calories
  }
}

export const caloriesLoadError = (error) => {
  return {
    type: CALORIES_LOAD_ERROR,
    payload: error
  }
}


export const deleteCaloriesSuccessful = (id) => {
  return {
    type: CALORY_DELETE,
    payload: id
  }
}

