import Link from "next/link";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const Posts = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="border border-amber-100 m-5 p-6 rounded-2xl space-y-2"
        >
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <Link href={`/posts/${post.id}`}>Click</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
