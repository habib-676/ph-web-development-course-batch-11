import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Nav from "./components/Navbar/Nav";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked, blog]);
  };

  const handleMarkAsRead = (id, time) => {
    const remainingMarked = bookmarked.filter((item) => item.id !== id);
    setBookmarked(remainingMarked);
    setReadingTime(readingTime + time);
  };
  return (
    <>
      <Nav></Nav>

      <div className="main-container flex">
        <div className="left-container w-[70%]">
          <Blogs
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>

        <div className="right-container w-[30%]">
          <h1>Reading time : {readingTime}</h1>
          <h1>Bookmarked count : {bookmarked.length}</h1>

          {bookmarked.map((marked) => (
            <p className="bg-amber-500 p-4 rounded-2xl shadow-2xl my-3">
              {marked.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
