import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Nav from "./components/Navbar/Nav";

function App() {
  const [bookmarked, setBookmarked] = useState([]);

  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked, blog]);
  };

  return (
    <>
      <Nav></Nav>

      <div className="main-container flex">
        <div className="left-container w-[70%]">
          <Blogs handleBookMark={handleBookMark}></Blogs>
        </div>

        <div className="right-container w-[30%]">
          <h1>Reading time : 0</h1>
          <h1>Bookmarked count : 0</h1>

          {bookmarked.map((marked) => (
            <p>{marked.title}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
