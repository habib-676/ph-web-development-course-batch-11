import React from "react";
import locationImg from "../../../../assets/location-merchant.png";
const BeMerchant = () => {
  return (
    <div className="hero bg-[url(assets/be-a-merchant-bg.png)] bg-cover  bg-[#03373D] p-20 rounded-4xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={locationImg} className="max-w-sm rounded-lg " />
        <div>
          <h1 className="text-5xl font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <button className="btn btn-primary rounded-3xl mr-5">Become a Merchant</button>
          <button className="btn btn-primary btn-outline rounded-3xl">Earn with pro fast courier</button>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
