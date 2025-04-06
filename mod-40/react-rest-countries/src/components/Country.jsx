import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // if (visited === false) {
    //   setVisited(true);
    // } else {
    //   setVisited(false);
    // }

    setVisited(!visited);
    handleVisitedCountries(country)
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <h3>Name : {country.name.common}</h3>
      <img src={country.flags.png} />
      <h5>Independency : {country.independent ? "Free" : "Not free"}</h5>
      <p>Population : {country.population}</p>

      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;
