import React from "react";

const JobBoardComponent = ({ job }) => {
  //define the tag variable that will contain the tags of the job
  const tags = [job.role, job.level];
  if (job.languages) {
    tags.push(...job.languages);
  }
  if (job.tools) {
    tags.push(...job.tools);
  }

  return (
    <div className="d-flex flex-wrap bg-white shadow m-4 p-6 rounded">
      <div>
        <img
          data-testid="company-logo"
          src={job.logo}
          alt={job.company}
          className="m-2 p-2 companyLogo"
        />
      </div>

      <div
        data-testid="job-details"
        className="d-flex flex-wrap  flex-column justify-content-between ml-4"
      >
        <h3 className="font-weight-bold text-primary m-2">
          {job.company}
          {job.jobNew && (
            <span className="h5 text-white bg-success m-4 p-1 rounded-pill">
              New
            </span>
          )}
          {job.featured && (
            <span className="h5 text-white bg-dark font-weight-bold m-4 p-1 rounded-pill">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-weight-bold h4">{job.position}</h2>
        <p className="h5">
          {job.postedAt} · {job.contract} · {job.position}
        </p>
      </div>

      <div className="d-flex flex-row flex-wrap align-items-center justify-content-center ml-auto">
        {tags
          ? tags.map((tag) => {
              return (
                <div className="m-2 p-2 rounded background-blue">{tag}</div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;
