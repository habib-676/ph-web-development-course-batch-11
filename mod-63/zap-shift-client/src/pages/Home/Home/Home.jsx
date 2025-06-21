import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import ClientSlider from "../ClientSlider/ClientSlider";
import BenefitsSection from "../Benefits/BenfitsSection";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Services></Services>
      </section>
      <section>
        <ClientSlider></ClientSlider>
      </section>
      <section>
        <BenefitsSection />
      </section>
    </div>
  );
};

export default Home;
