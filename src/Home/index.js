import React from "react";
import { Link } from "react-router-dom";

const homePage = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <p>
        <Link to="/signup">Signup here</Link>
      </p>
      <p>
        <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default homePage;
