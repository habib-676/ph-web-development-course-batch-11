import React from "react";
import {
  FiTruck,
  FiMapPin,
  FiPackage,
  FiCreditCard,
  FiBriefcase,
  FiRotateCcw,
} from "react-icons/fi";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const allServices = [
    {
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      icon: <FiTruck className="text-4xl text-primary" />,
    },
    {
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      icon: <FiMapPin className="text-4xl text-primary" />,
    },
    {
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      icon: <FiPackage className="text-4xl text-primary" />,
    },
    {
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: <FiCreditCard className="text-4xl text-primary" />,
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      icon: <FiBriefcase className="text-4xl text-primary" />,
    },
    {
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: <FiRotateCcw className="text-4xl text-primary" />,
    },
  ];
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Our Services</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
