import React from "react";
import NavBar from "../pages/Shared/NavBar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto mt-5">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
