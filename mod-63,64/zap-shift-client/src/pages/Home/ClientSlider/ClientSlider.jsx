import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientSlider = () => {
  return (
    <section className="py-10 ">
      <h2 className="text-3xl font-bold text-center mb-6">
        We've helped thousands of sales teams
      </h2>

      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-24 flex items-center">
            <img
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="h-6  w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ClientSlider;
