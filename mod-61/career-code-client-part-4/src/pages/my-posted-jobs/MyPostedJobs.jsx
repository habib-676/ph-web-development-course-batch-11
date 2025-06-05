import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobsListPosted from "./JobsListPosted";
import { jobsCreatedByPromise } from "../../api/jobs";

const MyPostedJobs = () => {
  const { user } = useAuth();

  return (
    <div>
      <Suspense fallback={"Loading ......"}>
        <JobsListPosted
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></JobsListPosted>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
