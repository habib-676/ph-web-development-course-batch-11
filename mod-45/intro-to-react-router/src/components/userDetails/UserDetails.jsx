import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h3>User details here</h3>
      <h4>Name : {name}</h4>
      <p>Website : {website}</p>
      <button onClick={handleNavigate}>Back to home</button>
    </div>
  );
};

export default UserDetails;
