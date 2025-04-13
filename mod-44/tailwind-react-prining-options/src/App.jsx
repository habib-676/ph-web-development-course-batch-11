import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PricingOptions from "./components/pricing-options/pricingOptions";
import ResultGraph from "./components/result-graph/ResultGraph";
import MarksChart from "./components/marks-chart/MarksChart";
import axios from "axios";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

const marksPromise = axios.get("studentMarks.json");

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

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
      </main>
    </>
  );
}

export default App;
