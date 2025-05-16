import React, { use, useState } from "react";

const Users = ({ userPromise }) => {
  const initialUsers = use(userPromise);
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = {
      name,
      email,
    };

    // data in db
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data after creating user in db", data);
        if (data.insertedId) {
          alert("User added successfully");
          newUser._id = data.insertedId;
          const newUsers = [...users, newUser];
          setUsers(newUsers);

          e.target.reset();
        }
      });
  };
  return (
    <div>
      {/* add user */}
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Enter email" />
        <br />
        <input type="submit" value="Add user" />
      </form>

      {/* view users */}
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name}: {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
