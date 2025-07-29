export const getSinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const SinglePost = async ({ params }) => {
  const p = await params;
  const postData = await getSinglePost(p.id);
  const { id, title, body } = postData;
  return (
    <div className="border border-amber-100 m-5 p-6 rounded-2xl space-y-2">
      <p>{id}</p>
      <b>{title}</b>
      <p>{body}</p>
    </div>
  );
};

export default SinglePost;
