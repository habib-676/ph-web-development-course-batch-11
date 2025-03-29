import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react"; //will add automatically after using suspense tag
import Friends from "./Friends";
import Posts from "./Posts";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
); // 1. just write simple json conversion
// 2. wrap the data loading component under suspense

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
function App() {
  const friendsPromise = fetchFriends();
  const postPromise = fetchPosts();
  return (
    <>
      <h3>Vite + React</h3>

      {/* users */}
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      {/* posts  */}
      <Suspense fallback={<h3>Posts are coming ....</h3>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense>

      {/* users list */}
      <Suspense fallback={<h3>Friends are coming ...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Counter></Counter>
      <Batsman></Batsman>
    </>
  );
}

export default App;
