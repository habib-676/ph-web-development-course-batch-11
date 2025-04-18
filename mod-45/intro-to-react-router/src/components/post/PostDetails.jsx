import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <h3>Post details here </h3>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default PostDetails;
