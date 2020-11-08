import React from "react";
import { Link } from "react-router-dom";
import "./design/NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav ml-auto d-flex flex-row">
          {/* <li className="nav-item active m-4">
          <Link href="/home" className="">
            Home
          </Link>
        </li> */}
          <li className="nav-item active m-4 h3 font-weight-bold">
            <Link to="/" className="">
              Jobs
            </Link>
          </li>

          <li className="nav-item active m-4 h3 font-weight-bold">
            <Link to="/candidates" className="">
              Candidates
            </Link>
          </li>
        </ul>
      </div>
      <div class="big-title3 text-center navbarHeader">
        <h1 class="big_title1">Aweseome job board for junior devs!</h1>
      </div>
    </div>
  );
};

export default NavBar;
