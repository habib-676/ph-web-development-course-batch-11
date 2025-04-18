import React from "react";
import { useLoaderData } from "react-router";
import Post from "../components/post/Post";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h3>All posts : {posts.length}</h3>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
