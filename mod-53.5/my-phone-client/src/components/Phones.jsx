import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();
  return (
    <div>
      <h2>all phones are here {phones.length}</h2>
      <div>
        {phones.map((phone) => (
          <li key={phone.id}>
            <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Phones;
