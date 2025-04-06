import React, { use, useState } from "react";
import Country from "./Country";
import "./country.css";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h1>Traveling countries : {countries.length}</h1>
      <h3>Traveled so far : {visitedCountries.length}</h3>
      <div>
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>
      <ol>
        {visitedCountries.map((con) => (
          <li>{con.name.common}</li>
        ))}
      </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
