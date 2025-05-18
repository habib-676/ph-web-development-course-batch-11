import React from "react";
import { useLoaderData } from "react-router";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <h3>Home</h3>
    </div>
  );
};

export default Home;
