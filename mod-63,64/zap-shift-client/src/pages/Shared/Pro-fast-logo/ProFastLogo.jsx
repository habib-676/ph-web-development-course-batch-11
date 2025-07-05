import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router";

const ProFastLogo = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-end relative">
        <img src={logo} />
        <p className="text-2xl font-extrabold absolute left-5">ProFast</p>
      </div>
    </Link>
  );
};

export default ProFastLogo;
