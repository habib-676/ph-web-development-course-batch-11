import { use } from "react";

export default function Posts({ postPromise }) {
  const posts = use(postPromise);
  return (
    <div
      className="card"
      style={{
        border: "2px white solid",
      }}
    >
      <h2>All posts :</h2>
      {posts.map((res) => (
        <div className="card">
          <h5>{res.title}</h5>
          <p>{res.body}</p>
        </div>
      ))}
    </div>
  );
}
