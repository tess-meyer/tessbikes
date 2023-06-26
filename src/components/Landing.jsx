import React from "react";
import logo from "../tess-logo.svg";
import backgroundImg from "../bg.jpeg";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <div
        className="h-1/2 relative"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-end">
          <div className="h-3/4 w-full bg-gradient-to-t from-indigo-900 to-transparent"></div>
        </div>
        <div className="flex justify-between p-4 absolute top-0 left-0 w-full">
          <div className="flex items-center">
            <div className="mr-2">
              <img src={logo} alt="Logo" className="max-w-xs max-h-36" />
            </div>
          </div>
          <div className="flex items-baseline">
            <button className="text-white hover:text-gray-300">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 7h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="h-1/2 bg-indigo-900"></div>
    </div>
  );
};

export default LandingPage;
