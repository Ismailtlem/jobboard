import React from "react";
import NavBar from "./NavBar";

//Candidate component
const Candidate = () => {
  return (
    <div className="Candidate">
      <NavBar />
      <div className="container d-flex flex-wrap">
        <div class="card candidate-style">
          <img
            class="card-img-top"
            src="./images/avatar-men.jpg"
            alt="Card image"
          />
          <div class="card-body">
            <h4 class="card-title">Ismail Tlemcani</h4>
            <p class="card-text">Fullstack developer</p>
            <a href="#" class="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>

        <div class="card candidate-style">
          <img
            class="card-img-top"
            src="./images/avatar-women.jpg"
            alt="Card image"
          />
          <div class="card-body">
            <h4 class="card-title">Caroline Test </h4>
            <p class="card-text">Frontend developer</p>
            <a href="#" class="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
