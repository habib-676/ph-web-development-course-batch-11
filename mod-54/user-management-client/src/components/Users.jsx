import React, { use, useState } from "react";

const Users = ({ userPromise }) => {
  const initialData = use(userPromise);
  const [users, setUsers] = useState(initialData);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {
      name,
      email,
    };

    // create user in the server
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data after post", data);
        const newUsers = [...users, data];
        setUsers(newUsers);
      });

    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Enter name" />
        <br />
        <input type="email" name="email" placeholder="Enter an email" />
        <br />
        <input type="submit" value="Add user" />
      </form>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.name} || {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
