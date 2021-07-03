import {
  WORKOUTS_LOADING, 
  WORKOUTS_LOAD_SUCESS,
  WORKOUTS_LOAD_ERROR
} from './constants'

export const workoutsLoading = () => {
  return{
    type: WORKOUTS_LOADING,
  }
}

export const workoutsLoadSuccess = (workouts) => {
  return{
    type: WORKOUTS_LOAD_SUCESS,
    workouts
  }
}

export const workoutsLoadError = (error) => {
  return{
    type: WORKOUTS_LOAD_ERROR,
    error
  }
}