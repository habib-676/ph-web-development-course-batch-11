import React, { use } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  return (
    <div>
      <h3>Total Bottles : {bottles.length}</h3>
      <div className="bottles-container">
        {bottles.map((bot) => (
          <Bottle key={bot.id} bottle={bot}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
