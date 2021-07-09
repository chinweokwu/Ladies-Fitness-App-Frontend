/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/">
            Workouts
          </NavLink>
        </li>
        <li>
          <NavLink to="/Calories">Calories</NavLink>
        </li>
        <li>
          <NavLink to="/Notepads">Notepads</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
