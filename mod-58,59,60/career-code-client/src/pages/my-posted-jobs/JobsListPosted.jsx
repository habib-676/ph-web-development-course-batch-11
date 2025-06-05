import React, { use } from "react";
import { Link } from "react-router";

const JobsListPosted = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div className="my-10 space-y-7">
      <h3 className="text-2xl font-semibold text-center">
        Jobs created by you : {jobs.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job title</th>
              <th>Deadline</th>
              <th>View applications</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {jobs.map((job, index) => (
              <tr key={job._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.deadline}</td>
                <td>
                  <Link
                    to={`/applications/${job._id}`}
                    className="text-blue-500"
                  >
                    Applications
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobsListPosted;
