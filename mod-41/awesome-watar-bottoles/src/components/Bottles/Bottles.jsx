import React, { use } from "react";
import Bottle from "../bottle/Bottle";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  return (
    <div>
      <h3>Total Bottles : {bottles.length}</h3>
      {bottles.map((bot) => (
        <Bottle key={bot.id} bottle = {bot}></Bottle>
      ))}
    </div>
  );
};

export default Bottles;
