/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Nav, NavLink } from "./style";

const Navbar = () => {
  return (
    <Nav>
      <NavLink exact to="/">
        Homepage
      </NavLink>
      <NavLink to="/Workouts">Workouts</NavLink>
      <NavLink to="/Calories">Calories</NavLink>
      <NavLink to="/Notepads">Notepads</NavLink>
    </Nav>
  );
};

export default Navbar;
