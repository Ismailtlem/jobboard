import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import JobBoard from "./components/JobBoard";
import Candidate from "./components/Candidate";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";

// JobList component for rendering the list of jobs
const JobListComponent = () => {
  //defining states
  const [term, setSearchTerm] = useState([]);
  const [jobs, setJobs] = useState([]);

  //updating the search term while the user is typing
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //Set the value of jobs
  useEffect(() => {
    axios
      .get("https://glacial-waters-09649.herokuapp.com/")
      .then((response) => {
        setJobs(response.data);
      });
  }, []);

  //return statement
  return (
    <div className="App">
      <NavBar />
      <SearchBar handleChange={handleChange} input={term} />
      {jobs.length === 0 ? (
        <p>Jobs are fetching ...</p>
      ) : (
        jobs.map((job) => {
          if (
            job.position
              .toString()
              .toLowerCase()
              .includes(term.toString().toLowerCase())
          ) {
            return <JobBoard job={job} key={job.id} />;
          }
        })
      )}
    </div>
  );
};

//Router for rendering the specific component depending on the path
const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={JobListComponent} />
        <Route path="/candidates">
          <Candidate />
        </Route>
      </Switch>
    </div>
  );
};

export { App, JobListComponent };
