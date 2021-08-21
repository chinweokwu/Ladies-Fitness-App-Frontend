const validation = values => {
  let errors =  {}

  if(!values.title){
    errors.title = "**title is missing**"
  }
  if(!values.body){
    errors.body = "**body is missing**"
  }

  return errors;
}

export default validation;
