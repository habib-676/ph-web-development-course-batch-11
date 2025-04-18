import React from "react";
import { useLoaderData } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  return (
    <div>
      <h3>Post details here </h3>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
