import React from 'react';
import backgroundImage from '../bike.jpeg'

const LandingPage = () => {

  const handleShopScroll = () => {
    const element = document.getElementById('shop');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleAboutScroll = () => {
    const element = document.getElementById('about');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="h-screen bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="flex h-full justify-center items-center bg-gray-100 bg-opacity-70">
        <div className="max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Bike Bags for Every Adventure
            </h2>
            <p className="mt-4 text-lg text-gray-900">
              Whether you're commuting to work or embarking on a multi-day tour,
              we have the perfect bike bag to meet your needs. Our bags are
              designed to be durable, weather-resistant, and stylish.
            </p>
            <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-6">
              <div className="rounded-md shadow">
                <a
                  onClick={handleShopScroll}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Shop Now
                </a>
              </div>
              <div className="rounded-md shadow">
                <a
                  onClick={handleAboutScroll}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
