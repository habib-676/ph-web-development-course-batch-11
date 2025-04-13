import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PricingOptions from "./components/pricing-options/pricingOptions";
import ResultGraph from "./components/result-graph/ResultGraph";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());
function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <ResultGraph></ResultGraph>
      </main>
    </>
  );
}

export default App;
