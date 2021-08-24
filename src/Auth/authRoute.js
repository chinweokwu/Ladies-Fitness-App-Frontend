import React from 'react';
import { Redirect, Route } from 'react-router';
import { getCurrentUser } from "../Services/userServices";

const AuthRoute = props => {
  const { type } = props;
  const user = getCurrentUser();

  if(type === "guest" && user) return <Redirect to="/Workouts" />;
  else if(type === "private" && !user) return <Redirect to="/" />;
  return <Route {...props} />;
};

export default AuthRoute;
