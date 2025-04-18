import React, { use } from "react";

const UserDetails2 = ({ userPromise }) => {
  const { username } = use(userPromise);
  return (
    <div>
      <p>
        <small>Name : {username}</small>
      </p>
    </div>
  );
};

export default UserDetails2;
