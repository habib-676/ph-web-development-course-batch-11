import React from "react";
import { useLoaderData } from "react-router";

const CommentDetails = () => {
  const details = useLoaderData();
  const { name, email } = details;
  return (
    <div>
      <h3>User details here</h3>
      <h4>Name : {name}</h4>
      <p>Email: {email}</p>
    </div>
  );
};

export default CommentDetails;
