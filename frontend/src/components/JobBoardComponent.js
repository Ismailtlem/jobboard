import React from "react";
/*{
    "id": 3,
    "company": "Account",
    "logo": "./images/account.svg",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }, */
const JobBoardComponent = ({ job }) => {
  const tags = [job.role, job.level];
  if (job.languages) {
    tags.push(...job.languages);
  }
  if (job.tools) {
    tags.push(...job.tools);
  }

  return (
    <div className="flex bg-white shadow-lg m-4 p-6 rounded">
      <div>
        <img src={job.logo} alt={job.company} className="logo" />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-blue-500">
          {job.company}
          {job.isNew && (
            <span className="text-teal-100 bg-teal-500 font-bold m-2 p-1 rounded-full">
              New
            </span>
          )}
          {job.featured && (
            <span className="text-white bg-black font-bold m-2 p-1 rounded-full">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl">{job.position}</h2>
        <p className="text-gray-700">
          {job.postedAt} · {job.contract} · {job.position}
        </p>
      </div>
      <div className="flex items-center justify-center ml-auto">
        {tags
          ? tags.map((tag) => {
              return (
                <span className="text-blue-500 bg-blue-100 font-bold m-2 p-2 rounded">
                  {tag}
                </span>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;
