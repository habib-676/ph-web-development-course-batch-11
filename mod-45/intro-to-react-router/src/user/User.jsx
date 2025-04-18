import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const {id, name, email, phone } = user;

  return (
    <div
      style={{
        border: "2px solid yellow",
        margin: "10px",
        padding: "10px",
        borderRadius: "20px",
        textAlign: "center",
        width: "50%"
      }}
    >
      <h3>{name}</h3>
      <p>{email}</p>
      <p>
        <small>{phone}</small>
      </p>
      <Link to={`/users/${id}`}>Show details</Link>
    </div>
  );
};

export default User;
<h2>User </h2>;
