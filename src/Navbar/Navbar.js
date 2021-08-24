import React, { useState, useEffect } from "react";
import { getCurrentUser } from "../Services/userServices";
import { Nav, NavLink } from "./style";
import { useDispatch } from "react-redux";
import { logOut } from "../Auth/actions";
import history from "../history";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut())
    history.push("/")
    window.location.reload();
  }
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
          <button onClick={handleLogout} >Log Out</button>
        </>
      ) : (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </>
      )}
    </Nav>
  );
};

export default Navbar;
