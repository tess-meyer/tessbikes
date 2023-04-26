import React from "react";
import Tess from "../tessbikes.png";

const About = () => {
  return (
    <div className="rounded-lg shadow-lg px-4 py-4 sm:p-6" id="about">
      <div className="sm:flex sm:flex-row sm:justify-between sm:items-center">
        <div className="sm:w-1/2 sm:pr-6 pb-3">
          <h2 className="text-2xl font-bold mb-4">About Tess Bikes</h2>
          <p className="text-gray-900 leading-relaxed">
            Tess is a cyclist and bike mechanic from Wellington, New
            Zealand based in Berlin. She is 8,300km through cycling around the
            world and has found a passion for creating beautiful, functional,
            upcycled bike kit. With 4 years of experience bikepacking, Tess is a
            trusted resource for all things bike-travel-related.
          </p>
          <p className="text-gray-900 leading-relaxed my-4">
            Follow Tess Bikes on Instagram{" "}
            <a
              href="https://www.instagram.com/tessbikes/"
              className="text-blue-500 hover:text-blue-700"
            >
              @tessbikes
            </a>{" "}
            for more cycling inspiration and information!
          </p>
        </div>
        <div className="group-hover:hidden sm:w-1/2 sm:pl-6 sm:mt-6 md:mt-0 md:w-40%">
          <img className="rounded-md" src={Tess} alt="Tess and her bike"/>
        </div>
      </div>
    </div>
  );
};

export default About;