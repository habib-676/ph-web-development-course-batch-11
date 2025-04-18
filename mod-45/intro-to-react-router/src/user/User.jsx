import React, { Suspense, useState } from "react";
import { Link } from "react-router";
import UserDetails2 from "../components/userDetails/UserDetails2";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const [showInfo, setShowInfo] = useState(false);

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

  return (
    <div
      style={{
        border: "2px solid yellow",
        margin: "10px",
        padding: "10px",
        borderRadius: "20px",
        textAlign: "center",
        width: "50%",
      }}
    >
      <h3>{name}</h3>
      <p>{email}</p>
      <p>
        <small>{phone}</small>
      </p>
      <Link to={`/users/${id}`}>Show details</Link>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} info
      </button>
      {showInfo && (
        <Suspense fallback={<span>Loading...</span>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      )}
    </div>
  );
};

export default User;
<h2>User </h2>;
