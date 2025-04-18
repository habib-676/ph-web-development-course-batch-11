import React from "react";
import Header from "../header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>
      {isNavigating && <span>Loading....</span>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
