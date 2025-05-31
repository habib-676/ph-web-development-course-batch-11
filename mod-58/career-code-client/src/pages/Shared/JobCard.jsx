import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    description,
    company_logo,
    requirements,
    company,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex items-center gap-5">
        <img src={company_logo} className="w-16" />
        <div>
          <h1 className="text-2xl font-semibold">{company}</h1>
          <p className="flex items-center gap-1 text-sm text-gray-400">
            <FaMapMarkerAlt /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions ">
          {requirements.map((skill, index) => (
            <div className="badge badge-outline" key={index}>
              {skill}
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Link to={`/jobs/${_id}`} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
