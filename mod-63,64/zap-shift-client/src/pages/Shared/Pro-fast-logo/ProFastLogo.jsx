import React from "react";
import logo from "../../../assets/logo.png";

const ProFastLogo = () => {
  return (
    <div className="flex items-end relative">
      <img src={logo} />
      <p className="text-2xl font-extrabold absolute left-5">ProFast</p>
    </div>
  );
};

export default ProFastLogo;
