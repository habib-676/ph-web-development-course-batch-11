import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookMark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Total Blogs: {blogs.length}</h1>
      <div className="all-blogs grid grid-cols-2 gap-3">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookMark={handleBookMark}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
