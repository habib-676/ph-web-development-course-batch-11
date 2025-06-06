import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer";
import NavBar from "../pages/Shared/NavBar";

const RootLayout = () => {
  return (
    <div className="w-11/12 mx-auto my-5">
      <NavBar></NavBar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
