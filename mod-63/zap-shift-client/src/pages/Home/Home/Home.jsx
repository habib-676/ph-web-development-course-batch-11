import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import ClientSlider from "../ClientSlider/ClientSlider";
import BenefitsSection from "../Benefits/BenfitsSection";
import AOS from "aos";
import "aos/dist/aos.css";
import BeMerchant from "./BeMerchant/BeMarchent";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // keep false to trigger on every scroll
      offset: 200, // delay animation until 200px into viewport
      easing: "ease-in-out", // smoother effect
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-right">
      <section>
        <Banner></Banner>
      </section>

      <section data-aos="fade-right">
        <Services></Services>
      </section>

      <section data-aos="fade-right">
        <ClientSlider></ClientSlider>
      </section>

      <section data-aos="fade-right">
        <BenefitsSection />
      </section>

      <section>
        <BeMerchant />
      </section>
    </div>
  );
};

export default Home;
