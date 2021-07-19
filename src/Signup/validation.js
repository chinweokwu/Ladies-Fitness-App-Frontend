const validation = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = "**username is required**";
  }
  if (!values.email) {
    errors.email = "**email is required**";
  } else if (!/\S+@\S+.\.\S+/.test(values.email)) {
    errors.email = "**invalid email**";
  }
  if (!values.password) {
    errors.password = "**password is required**";
  }
  if (!values.password_confirmation) {
    errors.password_confirmation = "password_confirmation is required";
  } else if (values.password !== values.password_confirmation) {
    errors.password_confirmation = "Retype your password";
  }
  return errors;
};

export default validation;
