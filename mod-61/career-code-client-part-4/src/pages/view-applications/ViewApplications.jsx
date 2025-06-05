import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
  const { jobId } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, application) => {
    console.log(e.target.value, application._id);

    axios
      .patch(`http://localhost:3000/applications/${application._id}`, {
        status: e.target.value,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="my-10 space-y-4">
      <h3 className="text-2xl font-semibold">
        {applications.length} Applications for : {jobId}
      </h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {applications.map((application, index) => (
              <tr className="bg-base-200" key={index}>
                <th>{index + 1}</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application)}
                    defaultValue={application.status}
                    className="select"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
