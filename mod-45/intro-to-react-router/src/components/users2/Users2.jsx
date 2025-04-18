import React, { use } from "react";

const Users2 = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log(users);
  return (
    <div>
      <h3>user 2 is present</h3>
    </div>
  );
};

export default Users2;
