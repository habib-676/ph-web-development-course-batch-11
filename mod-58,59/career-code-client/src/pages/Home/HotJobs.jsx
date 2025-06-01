import { use } from "react";
import JobCard from "../Shared/JobCard";

const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
  res.json()
);

const HotJobs = () => {
  const jobs = use(jobsPromise);
  return (
    <div>
      <h2 className="text-4xl font-bold my-6 text-center">Hot jobs of the Day</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {jobs.map((job) => (
          <JobCard job={job} key={job._id}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
