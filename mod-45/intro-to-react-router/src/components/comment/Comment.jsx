import React from "react";
import { Link } from "react-router";

const Comment = ({ comment }) => {
  const { body, id } = comment;
  return (
    <div
      style={{
        border: "1px dashed brown",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h5> Comment : {id}</h5>
      <p>{body}</p>
      <Link to={`/comments/${id}`}>
        <button>See User</button>
      </Link>
    </div>
  );
};

export default Comment;
