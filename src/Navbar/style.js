import style from "styled-components";
import { Link } from "react-router-dom";

export const Nav = style.nav`
  position: fixed;
  display:flex;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  background-color: #1a1e2e;
  justify-content: space-around;
`;

export const NavLink = style(Link)`
  text-decoration: none;
  margin-top: 5px;
  font-size: 20px;
  color: white;
`;
