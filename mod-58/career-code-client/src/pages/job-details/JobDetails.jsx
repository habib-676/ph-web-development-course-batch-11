import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  const { title, company } = job;
  return (
    <div className="text-center my-10 space-y-5">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>Company:{company}</p>

      <Link to={`/job-apply/:id`}>
        <button className="btn btn-secondary">Apply now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
