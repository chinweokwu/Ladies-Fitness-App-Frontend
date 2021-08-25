import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AUTH } from "./constants";
import Messages from "../Notifications/Messages";
import Errors from "../Notifications/Errors";
import "./style.css";

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
      <div className="login-root">
    <div className="box-root padding-top--24 flexy flexy-direction" style={{flexGrow: 1, zIindex: 9}}>
      <div className="box-root padding-top--48 padding-bottom--24 flexy flex-justifyContent--center">
        <h1>Login</h1>
      </div>
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
      <div className="formbg-outer">
        <div className="formbg">
          <div className="formbg-inner padding-horizontal--48">
            <span className="padding-bottom--15">Sign in to your account</span>
            <form id="stripe-login" onSubmit={handleSubmit}>
              <div className="field padding-bottom--24">
                <label for="email">Email</label>
                <input
                  name="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field padding-bottom--24">
                <div className="grid--50-50">
                  <label for="password">Password</label>
                </div>
                <input
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field padding-bottom--24">
                <button className="bttn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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
