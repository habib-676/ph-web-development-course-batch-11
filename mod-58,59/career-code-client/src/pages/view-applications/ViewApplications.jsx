import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
  const { jobId } = useParams();
  const applications = useLoaderData();

  return (
    <div>
      <h3 className="text-2xl font-semibold">
        {applications.length} Applications for : {jobId}
      </h3>
    </div>
  );
};

export default ViewApplications;
