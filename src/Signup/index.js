/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { connect } from "react-redux";
import Errors from "../Notifications/Errors";
import useForm from "./useForm";

const signupForm = ({ submitForm, requesting, err }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm);
  return (
    <div>
      <div>
        <h1>Create your Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            name="username"
            value={values.username}
          />
          {errors.username && <p class="error">{errors.username}</p>}
          <br />
          <br />
          <input
            type="text"
            onChange={handleChange}
            name="email"
            value={values.email}
          />
          {errors.email && <p class="error">{errors.email}</p>}
          <br />
          <br />
          <input
            type="text"
            onChange={handleChange}
            name="password"
            value={values.password}
          />
          {errors.password && <p class="error">{errors.password}</p>}
          <br />
          <br />
          <input
            type="text"
            onChange={handleChange}
            name="password_confirmation"
            value={values.password_confirmation}
          />
          {errors.password_confirmation && (
            <p class="error">{errors.password_confirmation}</p>
          )}
          <br />
          <br />
          <button>Sign Up</button>
          <small>
            OR
            <link to="/Login">LOGIN</link> if you have an account
          </small>
        </form>
      </div>
      <div>
        {requesting && <span>Loading signup...</span>}
        {!requesting && !!errors.length && (
          <Errors message="Failure to load result due to:" errors={err} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  requesting: state.signup.requesting,
  err: state.signup.errors,
});

export default connect(mapStateToProps)(signupForm);
