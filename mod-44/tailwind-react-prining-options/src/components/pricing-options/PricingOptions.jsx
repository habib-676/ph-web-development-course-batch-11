import React, { use } from "react";
import PricingCard from "../pricing-card/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div>
      <h2 className="text-4xl font-semibold">Buy our Membership</h2>
      <div className="grid md:grid-cols-3 gap-8 p-7">
        {pricingData.map((data) => (
          <PricingCard key={data.id} pricing={data}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
