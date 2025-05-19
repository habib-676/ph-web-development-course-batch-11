import React from "react";
import { useLoaderData } from "react-router";

const UpdateUsers = () => {
  const user = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const updatedUser = {
      name,
      email,
    };
    // update user info in the database
    fetch(`http://localhost:3000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => console.log("after update : ", data));
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={user.name} />
        <br />
        <input type="email" name="email" defaultValue={user.email} />
        <br />
        <input type="submit" value="Update Data" />
      </form>
    </div>
  );
};

export default UpdateUsers;
