import React from "react";
import { Outlet } from "react-router";
import Nav from "../componants/Navbar/Nav";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto text-center">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
