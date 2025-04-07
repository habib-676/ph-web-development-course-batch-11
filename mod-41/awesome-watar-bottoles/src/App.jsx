import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlesPromise = fetch("bottle.json").then((res) => res.json());

function App() {
  return (
    <>
      <h2>Buy Water bottles</h2>
      <Suspense fallback={<h3>Bottles are coming</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
