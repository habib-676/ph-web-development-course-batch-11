import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { salaryMin, salaryMax, currency, ...newJob } = data;
    newJob.salaryRange = {
      salaryMin,
      salaryMax,
      currency,
    };

    // requirements :
    newJob.requirements = newJob.requirements
      .split(",")
      .map((req) => req.trim());

    //   responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());
    console.log(newJob);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-7 my-10">
      <h3 className="text-2xl font-bold">Please Add a job here</h3>
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic information</legend>

          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Job title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Enter location"
          />

          <label className="label">Company logo</label>
          <input
            type="url"
            name="company_logo"
            className="input"
            placeholder="Company Logo URL"
          />

          {/* Job type */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Job Type</legend>
            <div className="filter">
              <input
                className="btn filter-reset"
                type="radio"
                name="jobType"
                aria-label="All"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                value="On-Site"
                aria-label="On-Site"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                value="Remote"
                aria-label="Remote"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                value="Hybrid"
                aria-label="Hybrid"
              />
            </div>
          </fieldset>

          {/* Category */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Category</legend>
            <select
              defaultValue="Job category"
              name="category"
              className="select select-neutral"
            >
              <option disabled={true}>Job category</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </fieldset>

          {/* Application Deadline */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Application Deadline</legend>
            <input type="date" className="input" name="deadline" />
          </fieldset>

          {/* Salary Range */}
          <fieldset className="grid grid-cols-1 md:grid-cols-3 fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Salary Range</legend>

            <div>
              <label className="label">Minimum Amount</label>
              <input
                type="number"
                name="salaryMin"
                className="input"
                placeholder="Enter amount"
              />
            </div>

            <div>
              <label className="label">Max Amount</label>
              <input
                type="number"
                name="salaryMax"
                className="input"
                placeholder="Enter amount"
              />
            </div>

            <div>
              <label className="label">Select a currency</label>

              <select
                defaultValue="Select a currency"
                name="currency"
                className="select select-primary"
              >
                <option disabled={true}>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </fieldset>

          {/* details */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Job description</legend>
            <textarea
              className="textarea"
              name="description"
              placeholder="Description"
            ></textarea>
          </fieldset>

          {/* Requirements */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Job requirements</legend>

            <textarea
              className="textarea"
              name="requirements"
              placeholder="Job requirements (Separate by comma)"
            ></textarea>
          </fieldset>

          {/* Responsibilities */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Job Responsibilities</legend>

            <textarea
              className="textarea"
              name="responsibilities"
              placeholder="Job Responsibilities (Separate by comma)"
            ></textarea>
          </fieldset>

          {/* HR info */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">HR related information</legend>

            <label className="label">HR Name</label>
            <input
              type="text"
              name="hr_name"
              className="input"
              placeholder="HR name :"
            />

            <label className="label">HR email</label>
            <input
              type="email"
              readOnly
              defaultValue={user.email}
              name="email"
              className="input"
              placeholder="HR Email :"
            />
          </fieldset>
          <input type="submit" value="Add Job" className="btn btn-neutral" />
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
