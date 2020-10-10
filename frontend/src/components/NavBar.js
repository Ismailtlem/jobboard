import React from "react";
import { Link } from "react-router-dom";
import "./design/NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <Link
            href="/home"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Jobs
          </Link>
          <Link
            to="/candidates"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Candidates
          </Link>
        </div>
      </div>
      <h1 className="header">The awesome job board for junior devs</h1>
    </div>
  );
};

export default NavBar;
