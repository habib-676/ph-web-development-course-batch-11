import React from "react";
import Features from "./Features";

const PricingCard = ({ pricing }) => {
  const { name, price, info, features } = pricing;

  return (
    <div className="border bg-cyan-600 rounded-3xl p-5 ">
      {/* card header */}
      <div>
        <h1 className="text-5xl">{name}</h1>
        <h3 className="text-3xl">{price}</h3>
      </div>

      {/* card body */}
      <div className="bg-[#ECA400] p-4 my-4 text-[#001D4A] rounded-2xl">
        <p className="">{info}</p>
        {features.map((feature, index) => (
          <Features key={index} feature={feature}></Features>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
