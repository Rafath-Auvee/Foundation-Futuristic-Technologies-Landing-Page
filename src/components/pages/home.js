import React from "react";

import Laptops from "./../Laptops";
import FeaturesBlocks from "./../product/FeaturesBlocks";
import Testimonials from "./../product/Testimonials";
import Card from "./../product/Card";
import Services from "./../shared/Services";
import Hero from "./../shared/Hero";
import Contact from "./../product/Contact";
import Gallery from "./../product/Gallery";

const Home = () => {
  return (
    <div>
      {/* <MainSlider/> */}

      <div className="">
        <Hero />
        <Testimonials />
        <div
          className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 mt-10"
          id="features"
        >
          <div className="max-w-screen-xl mx-auto">
            <h3 className="leading-none font-black text-3xl">Best Selling</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
            {Laptops.slice(0, 3).map((laptop, index) => (
              <Card key={laptop.id} laptop={laptop} />
            ))}
          </div>
        </div>
        <FeaturesBlocks />
        <Gallery/>
        <Services />
        <Contact/>
      </div>
    </div>
  );
};

export default Home;
