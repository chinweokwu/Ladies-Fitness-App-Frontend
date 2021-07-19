/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import validation from "./validation";
import { useDispatch } from "react-redux";
import { SIGNUP } from "./constants";

const useForm = (submitForm) => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [dataCorrect, setDataCorrect] = useState(false);
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setUsers({
      ...users,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: SIGNUP.REQUESTING,
      payload: users,
    });
    setErrors(validation(users));
    setDataCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataCorrect) {
      submitForm(true);
    }
  }, [errors]);
  return { handleChange, handleSubmit, errors, users };
};

export default useForm;
