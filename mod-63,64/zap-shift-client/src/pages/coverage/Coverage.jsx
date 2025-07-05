import React from "react";
import BangladeshMap from "./BangladeshMap";

const Coverage = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center text-primary">
        We are available in 64 districts
      </h1>

      {/* Map Section */}
      <BangladeshMap />

      {/* Placeholder for the search box */}
      <div className="mt-6">{/* We'll add the search box here later */}</div>
    </div>
  );
};

export default Coverage;
