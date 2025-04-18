import React from "react";
import { useLoaderData } from "react-router";
import Comment from "../comment/Comment";

const Comments = () => {
  const comments = useLoaderData();
  return (
    <div>
      <h3>Comments will appear here</h3>
      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default Comments;
