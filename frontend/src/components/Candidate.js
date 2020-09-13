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
                  src="https://i.pravatar.cc/150?img=66"
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
                  src="https://i.pravatar.cc/150?img=31"
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

          {/*Card 3 */}
          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="https://i.pravatar.cc/150?img=18"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-medium text-gray-700">Wayan Alex</h2>
              <span className="text-blue-500 block mb-5">Data Scientist</span>

              <a
                href="#"
                className="px-4 py-2 bg-blue-500 text-white rounded-full"
              >
                Hire
              </a>
            </div>
          </div>

          {/*Card 4 */}
          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="https://i.pravatar.cc/150?img=28"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-medium text-gray-700">Ketut Julia</h2>
              <span className="text-blue-500 block mb-5">Project Manager</span>

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
