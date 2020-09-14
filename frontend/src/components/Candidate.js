import React from "react";
import NavBar from "./NavBar";

//Candidate component
const Candidate = () => {
  return (
    <div className="Candidate">
      <NavBar />
      <div id="container" className="w-4/5 mx-auto">
        <div className="flex flex-col sm:flex-row">
          {/*Card 1 */}
          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="./images/avatar-men.jpg"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-medium text-gray-700">
                Pande Muliada
              </h2>
              <span className="text-blue-500 block mb-5">
                Front End Developer
              </span>

              <a
                href="#"
                className="px-4 py-2 bg-blue-500 text-white rounded-full"
              >
                Hire
              </a>
            </div>
          </div>

          {/*Card 2 */}
          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="./images/avatar-women.jpg"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-medium text-gray-700">
                Saraswati Cahyati
              </h2>
              <span className="text-blue-500 block mb-5">
                Back End Developer
              </span>

              <a
                href="#"
                className="px-4 py-2 bg-blue-500 text-white rounded-full"
              >
                Hire
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
