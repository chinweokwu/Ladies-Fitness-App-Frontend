import WORKOUTS from './constants';

export const loadWorkouts = () => ({
  type: WORKOUTS.LOAD,
});

export const setWorkouts = (workouts) => ({
  type: WORKOUTS.LOAD_SUCCESS,
  workouts,
});

export const getError = (error) => ({
  type: WORKOUTS.LOAD_ERROR,
  error,
});
