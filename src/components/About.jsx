import React from "react";
import TessImage from "../tessbikes.png";

const About = () => {
  return (
    <div className="rounded-lg shadow-lg px-4 py-4 sm:p-6" id="about">
      <div className="sm:flex sm:flex-row sm:justify-between sm:items-center">
        <div className="sm:w-1/2 sm:pr-6 pb-3">
          <h2 className="text-2xl font-bold mb-4">About Tess</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            Tess, based in Berlin and originally from Wellington, New Zealand, has over 8,300km of bikepacking experience
            in Aotearoa and Europe. She is passionate about creating beautiful, functional, upcycled bike kit and has been an
            integral part of the bikepacking community for 4 years.
          </p>
          <p className="mb-4">
            Embarking on a bike travel journey is an exciting step towards a healthier and more fulfilling way to explore
            the world. If you're contemplating this adventure but are unsure where or how to begin, Tess is here to guide you.
            Let's work together to make your bike travel dreams a reality and contribute to a more
            sustainable and harmonious way of exploring our beautiful planet.
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
          <img className="rounded-md" src={TessImage} alt="Tess and her bike" />
        </div>
      </div>
    </div>
  );
};

export default About;
