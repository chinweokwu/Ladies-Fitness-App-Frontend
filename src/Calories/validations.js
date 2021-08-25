const validation = (values) => {
  const errors = {};

  if (!values.weight) {
    errors.weight = '**weight is missing**';
  }
  if (!values.body) {
    errors.workoutTime = '**workoutTime is missing**';
  }

  return errors;
};

export default validation;
