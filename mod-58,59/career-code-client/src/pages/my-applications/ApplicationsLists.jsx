import React, { use } from "react";
import ApplicationRow from "./ApplicationRow";

const ApplicationsLists = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div>
      <h2>Jobs applications : {applications.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <ApplicationRow
                application={application}
                index={index}
              ></ApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsLists;
