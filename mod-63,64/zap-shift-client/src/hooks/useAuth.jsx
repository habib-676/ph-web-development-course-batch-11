import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const useAuth = () => {
  const authInfo = use(useAuth);
  return authInfo;
};

export default useAuth;
