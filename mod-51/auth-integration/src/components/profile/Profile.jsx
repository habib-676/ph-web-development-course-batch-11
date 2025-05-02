import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="max-w-sm mx-auto">
      <h3>{user.email}</h3>
    </div>
  );
};

export default Profile;
