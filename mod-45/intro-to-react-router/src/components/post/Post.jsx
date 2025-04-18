import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
    const {id,title}=post;
  return (
    <div
      style={{
        border: "red 1px solid",
        borderRadius: "20px",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h4>{title}</h4>
      <Link to={`/posts/${id}`}>
        <button>Show details</button>
      </Link>
    </div>
  );
};

export default Post;
