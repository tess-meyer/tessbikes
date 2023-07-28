import React from "react";
import logo from "../tess-logo.svg";
// import backgroundImg from "../mountains.avif";
import backgroundImg from "../polygon.jpg";

import desktopBackgroundImg from "../desktop-bg.avif";
// import desktopBackgroundImg from "../polygon.jpg";

import { Link } from "react-scroll";

const LandingPage = () => {

  const handleClick = () => {
  
  }

  return (
    <div className="flex flex-col h-screen">
      <div
        className="h-1/2 relative bg-cover"
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
        </div>

        {/* Show desktop background image on larger screens */}
        <div className="hidden sm:block absolute inset-0">
          <div
            className="h-full bg-cover"
            style={{
              backgroundImage: `url(${desktopBackgroundImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex items-end">
              <div className="h-3/4 -mb-1 w-full bg-gradient-to-t from-indigo-900 to-transparent"></div>
            </div>
            <div className="flex justify-between p-4 absolute top-0 left-0 w-full">
              <div className="flex items-center">
                <div className="mr-2">
                  <img src={logo} alt="Logo" className="max-w-xs max-h-36" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1/2 bg-indigo-900 flex flex-col sm:items-start sm:text-left">
        <div className="text-white text-left sm:text-left px-4 text-shadow-lg text-5xl font-custom leading-8xl lg:text-8xl">
          Bespoke bike bags for your next adventure
        </div>
        <div class="flex items-start">
          <Link
          to="shop" 
          smooth={true}
          duration={500}
          >
            <button class="bg-teal-500 hover:bg-teal-700 text-white text-xl font-custom py-2 px-4 ml-4 mt-4 cursor-pointer lg:text-4xl">
              SHOP BAGS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
