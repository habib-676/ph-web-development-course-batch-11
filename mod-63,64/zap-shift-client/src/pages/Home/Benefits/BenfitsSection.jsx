import React from "react";
import safe from "../../../assets/safe-delivery.png";
import parcelTrack from "../../../assets/live-tracking.png";
const benefits = [
  {
    id: 1,
    image: parcelTrack,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    id: 2,
    image: safe,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    id: 3,
    image: safe,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-12 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

      <div className="max-w-6xl mx-auto space-y-6 px-4">
        {benefits.map((item) => (
          <div
            key={item.id}
            className="card md:card-side bg-base-200 shadow-md p-4"
          >
            {/* Image on left */}
            <figure className="w-full md:w-32">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-contain"
              />
            </figure>

            {/* Divider for large screens */}
            <div className="hidden md:block w-px bg-neutral mx-4 my-4" />

            {/* Text content */}
            <div className="card-body p-0">
              <h3 className="card-title text-xl">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
