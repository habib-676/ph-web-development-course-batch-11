import React from "react";

const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;
  return (
    <div className="bg-base-100 shadow-md rounded-xl p-6 text-left hover:shadow-lg transition duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
