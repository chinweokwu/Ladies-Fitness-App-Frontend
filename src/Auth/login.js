import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AUTH } from "./constants";
import Messages from "../Notifications/Messages";
import Errors from "../Notifications/Errors";

const Login = ({ requesting, successful, messages, errors }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitData = () => {
    const res = {
      email: values.email,
      password: values.password,
    };
    console.log(res);
    return res;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: AUTH.LOGIN_START, payload: submitData() });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
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

export default connect(mapStateToProps)(Login);
