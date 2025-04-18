import React from "react";
import { useLoaderData } from "react-router";
import User from "../../user/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
    {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
    </div>
  );
};

export default Users;
