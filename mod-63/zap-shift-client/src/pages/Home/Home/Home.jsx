import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Services></Services>
      </section>
    </div>
  );
};

export default Home;
