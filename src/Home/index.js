import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const homePage = () => {
  return (
    <div> 
      <div className="bg">
        <div className="auth">
          <Link to="/signup" style={{ color: 'white',textDecoration: 'none'  }}>Signup here</Link><br/><br/>
          <Link to="/login" style={{ color: 'white',textDecoration: 'none'  }}>Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default homePage;
