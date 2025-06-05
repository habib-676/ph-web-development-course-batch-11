import React, { Suspense } from "react";
import ApplicationsStats from "./ApplicationsStats";
import ApplicationsLists from "./ApplicationsLists";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applications";

const MyApplications = () => {
  const { user } = useAuth();
  return (
    <div>
      <ApplicationsStats></ApplicationsStats>
      <Suspense fallback={"Loading..."}>
        <ApplicationsLists
          myApplicationsPromise={myApplicationsPromise(
            user.email,
            user.accessToken
          )}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
