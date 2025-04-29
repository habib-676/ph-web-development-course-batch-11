import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/Nav/NavBar";

const root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default root;
