import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Count from "./Count";
import Display from "./Display";
import Users from "./Users";
import { Suspense } from "react";

const fetchUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error(`HTTP error! Status : ${res.status}`);
    }
    return res.json();
  } catch (error) {
    return { error: error.message };
  }
  // not done yet
};

export default function App() {
  const userPromise = fetchUsers();
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>{" "}
      <Suspense fallback={<h1>Users are coming.....</h1>}>
        <Users userPromise={userPromise}></Users>
      </Suspense>
      <Count></Count>
      <Display></Display>
    </>
  );
}
