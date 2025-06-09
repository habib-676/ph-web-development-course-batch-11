import React, { Suspense } from "react";
import ApplicationsStats from "./ApplicationsStats";
import ApplicationsLists from "./ApplicationsLists";
import useAuth from "../../hooks/useAuth";
import useApplicationApi from "../../api/useApplicationApi";

const MyApplications = () => {
  const { user } = useAuth();
  const { myApplicationsPromise } = useApplicationApi();
  console.log(myApplicationsPromise);

  console.log(user.accessToken);
  return (
    <div>
      <ApplicationsStats></ApplicationsStats>
      <Suspense fallback={"Loading..."}>
        <ApplicationsLists
          myApplicationsPromise={myApplicationsPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
