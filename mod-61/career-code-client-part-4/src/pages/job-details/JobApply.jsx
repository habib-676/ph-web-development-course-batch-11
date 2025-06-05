import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    form.reset();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-7 my-10">
      <h1 className="text-3xl">Apply for job now !</h1>
      <Link to={`/jobs/${jobId}`}>
        <p className="text-blue-600">Details</p>
      </Link>
      <form
        onSubmit={handleApply}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <label className="label">LinkedIn</label>
        <input
          type="url"
          name="linkedIn"
          className="input"
          placeholder="LinkedIn link : "
        />

        <label className="label">Github</label>
        <input
          type="url"
          name="github"
          className="input"
          placeholder="Github link : "
        />

        <label className="label">Resume Link</label>
        <input
          type="url"
          name="resume"
          className="input"
          placeholder="Resume link : "
        />

        <input type="submit" className="btn btn-neutral mt-4" value="Apply" />
      </form>
    </div>
  );
};

export default JobApply;
