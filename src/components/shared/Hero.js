import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const Products = async (id) => {
    const baseURL = `http://localhost:3000/products/`;
    await navigate(`/products/`);
    console.log("Products page clicked");
  };

  return (
    <div>
      <section className="px-2 py-32  md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Leading Laptop </span>
                  <span className="block text-indigo-600 xl:inline">
                    & Online Shop in Worldwide
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  Foundation Futuristic Technologies is the largest and most
                  reliable Laptop Brand Shop in worldwide. It does not matter
                  whether you want a gaming laptop, an Intel-powered laptop, or
                  an AMD Ryzen laptop for your work, gaming, freelancing, or
                  study. We have covered all of the budget range for laptops.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  {/* <Link to="/products" />  */}
                  <button
                    onClick={() => Products()}
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                  >
                    Browse Products
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                  <a
                    href="#_"
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <iframe
                  src="https://player.vimeo.com/video/157493554?h=44328c5be4&title=0&byline=0&portrait=0"
                  width="640"
                  height="360"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
