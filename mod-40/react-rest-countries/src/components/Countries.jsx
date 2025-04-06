import React, { use, useState } from "react";
import Country from "./Country";
import "./country.css";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h1>Traveling countries : {countries.length}</h1>
      <h3>Traveled so far : {visitedCountries.length}</h3>

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
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
