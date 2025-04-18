import React from "react";
import { Link, NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>I am header</h2>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/mobile">Mobile</NavLink>
      <NavLink to="/laptops">Laptops</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/users2">Users2</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/comments">Comments</NavLink>
    </div>
  );
};

export default Header;
