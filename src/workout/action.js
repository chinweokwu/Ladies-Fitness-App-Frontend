import { WORKOUTS } from './constants'

export const loadWorkouts = () => {
  return{
    type: WORKOUTS.LOAD,
  }
}

export const setWorkouts = (workouts) => {
  return{
    type: WORKOUTS.LOAD_SUCCESS,
    workouts
  }
}

export const getError = (error) => {
  return{
    type: WORKOUTS.LOAD_ERROR,
    error
  }
}