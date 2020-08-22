import React, { useState, useEffect } from "react";
import JobBoardComponent from "./components/JobBoardComponent";
import data from "./assets/data.json";
import SearchBar from "./components/SearchBar";

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(data);
  }, []);
  return (
    <div className="App">
      <h1 className="text-6xl"></h1>
      <SearchBar />;
      {jobs.length === 0 ? (
        <p>Jobs are fetching ...</p>
      ) : (
        jobs.map((job) => {
          return <JobBoardComponent job={job} key={job.id} />;
        })
      )}
    </div>
  );
}

export default App;
