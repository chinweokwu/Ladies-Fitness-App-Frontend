import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AUTH } from "./constants";
import Messages from "../Notifications/Messages";
import Errors from "../Notifications/Errors";

const Signup = ({ requesting, successful, messages, errors }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitData = () => {
    const res = {
      username: values.username,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
    };
    console.log(res);
    return res;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: AUTH.SIGNUP_START, payload: submitData() });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label>
          Username
          <input
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="text"
            value={values.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
        </label>
        <label>
          password_confirmation
          <input
            name="password_confirmation"
            type="password"
            value={values.password_confirmation}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
      <div>
        {!requesting && undefined !== errors && !!errors.length && (
          <Errors message="Failure to login due to:" errors={errors} />
        )}
        {!requesting && undefined !== messages && !!messages.length && (
          <Messages messages={messages} />
        )}
        {requesting && <div>Logging in...</div>}
        {!requesting && !successful && (
          <Link to="/signup">Need to Signup? Click Here »</Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  requesting: state.auths.requesting,
  errors: state.auths.errors,
  messages: state.auths.messages,
  successful: state.auths.successful,
});

export default connect(mapStateToProps)(Signup);
