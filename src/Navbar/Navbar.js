import React, { useState, useEffect } from "react";
import { getCurrentUser } from "../Services/userServices";
import { Nav, NavLink } from "./style";
const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <Nav>
      {currentUser ? (
        <>
          <NavLink to="/">{currentUser.username}</NavLink>
          <NavLink to="/Workouts">Workouts</NavLink>
          <NavLink to="/Calories">Calories</NavLink>
          <NavLink to="/Notepads">Notepads</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Calories</NavLink>
          <NavLink to="/signup">Notepads</NavLink>
        </>
      )}
    </Nav>
  );
};

export default Navbar;
